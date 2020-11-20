import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { frontReservation, frequentTravellersInfo, passengersInfo, specialServicesInfo, headerInfo, itinerariesInfo, frontRequest, message, tipificacion, motivesInfo, messageChangeStateManagement, messageSaveOutboundReservation, messageSaveInboundReservation } from '../../models/models';
import swal from 'sweetalert2';
import { messagesApp } from '../shared/message/messages';
import { TokenService } from '../../services/token.service';
import { messageContactTypeModel, messageAffectationTypeByHistories, messageSaveIropsReservation } from '../../models/message';
import { ContactType } from '../../models/ContactType';
import { resources } from '../../../environments/environment'
import { AffectationTypeByHistories } from '../../models/affectation-type-by-histories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styles: []
})
export class CallComponent implements OnInit {
  resources = resources;

  //Variables publicas
  @Output() emitHeader: EventEmitter<headerInfo> = new EventEmitter<headerInfo>();
  @Input() optionView: boolean = true;
  colsPassengers: any[];
  colsfrequentTraveller: any[];
  colsitinerariesInfo: any[];
  colsspecialServicesInfo: any[];
  objFrontOutboundReserve: frontReservation;
  objPassengersInfo: passengersInfo[] = [];
  objFrequentTravellersInfo: frequentTravellersInfo[] = [];
  objSpecialServicesInfo: specialServicesInfo[] = [];
  objItinerariesInfo: itinerariesInfo[] = [];
  objHeader: headerInfo;
  isPassenger: boolean = true;
  isFrequentTraveller: boolean = true;
  isItinerary: boolean = true;
  isSpecialService: boolean = true;
  moment: string;
  activity: string;
  reason: string;
  reasonDetail: string;
  motive: string;
  optionMenu: string;
  loading: boolean;
  optionGestion: motivesInfo[];
  flagGestion: boolean;
  flagTipificacion: boolean;
  rowGroupMetadata: any;
  localStateManagement_Id: string;
  contactsArray: Array<any> = [];
  newAttribute: any = {};
  contactTypeId: string;
  contactTypeName: any;
  listContactTypes: ContactType;
  listAffectationTypeByHistories: AffectationTypeByHistories;
  isPhone: boolean;
  isProtected: boolean = false;
  isContactType: boolean = false;
  isEventType: boolean = false;
  globalConsolidatedReservation_Id: string

  constructor(private http: HttpClient, private apiService: ApiService, private _tokenService: TokenService, private router: Router) {
  }

  ngOnInit() {

    //Columnas pasajeros
    this.colsPassengers = [
      { field: 'firstName', header: 'Nombres' },
      { field: 'lastName', header: 'Apellidos' },
      { field: 'travellerType', header: 'Tipo Viajero' },
      { field: 'descriptionCT', header: 'Tipo Contacto' },
      { field: 'descriptionC', header: 'Contacto' }
    ];

    //Columnas viajero frecuente
    this.colsfrequentTraveller = [
      { field: 'customerID', header: 'Viajero Frecuente' },
      { field: 'customerFirstName', header: 'Nombres' },
      { field: 'customerSurtName', header: 'Apellidos' },
      { field: 'customerLevelName', header: 'Nivel' }
    ];

    //Columnas itinerario
    this.colsitinerariesInfo = [
      { field: 'flightNumber', header: 'Número Vuelo' },
      { field: 'departureDate', header: 'Fecha Salida' },
      { field: 'arriveDate', header: 'Fecha Llegada' },
      { field: 'origin', header: 'Origen' },
      { field: 'destination', header: 'Destino' },
      { field: 'statusCode', header: 'Estado' },
      { field: 'isProtected', header: 'Protección' }
    ];

    //Columnas servicios especiales
    this.colsspecialServicesInfo = [
      { field: 'description', header: 'Código' },
      { field: 'value', header: 'Valor' }
    ];

    //Tipificación
    this.moment = "Antes del vuelo";
    this.activity = "Antes de la llegada del vuelo";
    this.reason = "Irregularidad operacional";
    this.reasonDetail = "Reubicación en otro vuelo";
    this.motive = "Gestión preventiva";

    this.isPhone = false;
    this._tokenService.token().subscribe(token => {
      this.apiService.getContactTypes(token.Data.accessToken).subscribe((responseContactTypes: messageContactTypeModel) => {
        this.listContactTypes = responseContactTypes.Data;
      });

      this.apiService.getAffectationTypeByHistories(token.Data.accessToken).subscribe((responseAffectationTypeByHistories: messageAffectationTypeByHistories) => {
        this.listAffectationTypeByHistories = responseAffectationTypeByHistories.Data;
      });
    });

  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  //Consulta opción Outbound
  getOutbound(stateManagement_Id: any) {
    this.localStateManagement_Id = stateManagement_Id;
    if (stateManagement_Id != null) {
      let body = {
        "user_Id": sessionStorage.getItem('user_id'),
        "stateManagement_Id": stateManagement_Id,
        "case_Id": "string",
        "motive_Id": "string",
        "pnr": "string"
      };

      //Cambio de estado 
      this.loading = true;
      this._tokenService.token().subscribe(token => {
        if (sessionStorage.getItem('stateManagement').toUpperCase() == 'DISPONIBLE') {
          //Consulta Outbound
          this.apiService.outbound(body, token.Data.accessToken).subscribe((responseOutbound: message) => {
            if (responseOutbound.Data != null) {
              this.flagTipificacion = true;
              this.objFrontOutboundReserve = responseOutbound.Data;
              this.objHeader = this.objFrontOutboundReserve.headerInfo;
              this.objPassengersInfo = this.objFrontOutboundReserve.passengersInfo;
              this.objFrequentTravellersInfo = this.objFrontOutboundReserve.frequentTravellersInfo;
              this.objItinerariesInfo = this.objFrontOutboundReserve.itinerariesInfo;
              this.objSpecialServicesInfo = this.objFrontOutboundReserve.specialServicesInfo;
              this.optionGestion = this.objFrontOutboundReserve.motivesInfo;
              this.updateRowGroupMetaData();
              this.optionView = true;
              this.loading = false;

              if (this.objPassengersInfo.length == 0) {
                this.isPassenger = false;
              }
              if (this.objFrequentTravellersInfo.length == 0) {
                this.isFrequentTraveller = false;
              }
              if (this.objItinerariesInfo.length == 0) {
                this.isItinerary = false;
              }
              if (this.objSpecialServicesInfo.length == 0) {
                this.isSpecialService = false;
              }
              if (this.objHeader != null) {
                if (this.objHeader.notified == 'False') {
                  this.objHeader.notified = 'No';
                } else {
                  this.objHeader.notified = 'Si';
                }
              }
              this.emitHeader.emit(this.objHeader);
              let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width = 700, height = 400, top = 50';
              window.open(this.objFrontOutboundReserve.urlCrm, 'Preventiva', params);
            } else {
              this.objHeader = null;
              this.emitHeader.emit(this.objHeader);
              this.optionView = false;
              this.loading = false;
              swal({
                title: 'Aviso!',
                text: responseOutbound.ReturnMessage,
                type: 'warning',
                confirmButtonText: messagesApp.buttonAcept,
                confirmButtonColor: '#dc3545'
              });
            }
          });
        } else {
          this.loading = false;
        }
      },
        err => {
          this.loading = false;
        });
    }
  }

  //Consulta Inbound por PNR
  get_PNR(pnr: string) {
    let body = {
      "user_Id": sessionStorage.getItem('user_id'),
      "stateManagement_Id": "",
      "case_Id": "string",
      "motive_Id": "string",
      "pnr": pnr
    };
    //Consulta Inbound
    this.flagTipificacion = false;
    this.loading = true;
    this._tokenService.token().subscribe(token => {
      this.apiService.inbound(body, token.Data.accessToken).subscribe(async (responseInbound: message) => {
        if (responseInbound.Data != null) {
          this.objFrontOutboundReserve = responseInbound.Data;
          this.objHeader = this.objFrontOutboundReserve.headerInfo;
          this.objPassengersInfo = this.objFrontOutboundReserve.passengersInfo;
          this.objFrequentTravellersInfo = this.objFrontOutboundReserve.frequentTravellersInfo;
          this.objItinerariesInfo = this.objFrontOutboundReserve.itinerariesInfo;
          this.objSpecialServicesInfo = this.objFrontOutboundReserve.specialServicesInfo;
          this.optionGestion = this.objFrontOutboundReserve.motivesInfo;
          this.updateRowGroupMetaData();
          this.optionView = true;
          this.loading = false;
          this.flagTipificacion = true;

          if (this.objPassengersInfo.length == 0) {
            this.isPassenger = false;
          }
          else {
            this.isPassenger = true;
          }

          if (this.objFrequentTravellersInfo.length == 0) {
            this.isFrequentTraveller = false;
          } else {
            this.isFrequentTraveller = true;
          }

          if (this.objItinerariesInfo.length == 0) {
            this.isItinerary = false;
          } else {
            this.isItinerary = true;
          }

          if (this.objSpecialServicesInfo.length == 0) {
            this.isSpecialService = false;
          } else {
            this.isSpecialService = true;
          }

          if (this.objHeader != null) {
            if (this.objHeader.notified == 'False') {
              this.objHeader.notified = 'No';
            } else {
              this.objHeader.notified = 'Si';
            }
          }
          this.emitHeader.emit(this.objHeader);
          let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width = 700, height = 400, top = 50';
          window.open(this.objFrontOutboundReserve.urlCrm, 'Preventiva', params);
        } else {
          this.optionView = false;
          this.loading = false;
          this.flagTipificacion = true;
          swal({
            title: 'Error!',
            text: messagesApp.messageReservationNotFound,
            type: 'error',
            confirmButtonText: messagesApp.buttonAcept,
            confirmButtonColor: '#dc3545'
          });
        }
      },
        err => {
          this.loading = false;
        });
    },
      err => {
        this.loading = false;
      });
  }

  //Guardar reserva
  saveReservation() {
    swal({
      title: 'Está seguro de guardar los cambios?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        let motive: any = document.getElementById('fieldMotive');
        let body = {
          "user_Id": sessionStorage.getItem('user_id'),
          "stateManagement_Id": "",
          "case_Id": this.objFrontOutboundReserve.case_Id,
          "motive_Id": motive.options[motive.selectedIndex].value,
          "pnr": this.objHeader.reservationNumber
        };
        this.loading = true;

        if (sessionStorage.getItem('module') == 'outbound') {
          //Guarda reserva outbound
          this._tokenService.token().subscribe(token => {
            this.apiService.saveOutboundReservation(body, token.Data.accessToken).subscribe(async (responseSave: messageSaveOutboundReservation) => {
              this.loading = false;
              if (responseSave.IsSuccess) {
                swal({
                  type: 'success',
                  title: 'Enhorabuena...',
                  text: responseSave.Data,
                  confirmButtonText: messagesApp.buttonAcept,
                  confirmButtonColor: '#dc3545'
                });
              } else {
                swal({
                  type: 'error',
                  title: 'Oops...',
                  text: responseSave.Data,
                  confirmButtonText: messagesApp.buttonAcept,
                  confirmButtonColor: '#dc3545'
                });
              }

              if (responseSave.ReturnMessage.toUpperCase() == 'DISPONIBLE') {
                this.getOutbound(this.localStateManagement_Id);
              } else {
                this.objHeader = null;
                this.emitHeader.emit(this.objHeader);
                this.optionView = false;
              }
            },
              err => {
                this.loading = false;
              });
          },
            err => {
              this.loading = false;
            });
        } else {
          if (sessionStorage.getItem('module') == 'inbound') {
            //Guarda reserva inbound
            this._tokenService.token().subscribe(token => {
              this.apiService.saveInboundReservation(body, token.Data.accessToken).subscribe(async (responseSave: messageSaveInboundReservation) => {
                this.loading = false;
                if (responseSave.IsSuccess) {
                  swal({
                    type: 'success',
                    title: 'Enhorabuena...',
                    text: responseSave.Data,
                    confirmButtonText: messagesApp.buttonAcept,
                    confirmButtonColor: '#dc3545'
                  });
                } else {
                  swal({
                    type: 'error',
                    title: 'Oops...',
                    text: responseSave.Data,
                    confirmButtonText: messagesApp.buttonAcept,
                    confirmButtonColor: '#dc3545'
                  });
                }

                this.objHeader = null;
                this.emitHeader.emit(this.objHeader);
                this.optionView = false;
              },
                err => {
                  this.loading = false;
                });
            },
              err => {
                this.loading = false;
              });
          } else {
            if (sessionStorage.getItem('module') == 'irops') {
              if (this.objHeader.motiveDescription === resources.contactTypeName) {
                //Guarda reserva irops
                let bodyIrops = {
                  "user_Id": sessionStorage.getItem('user_id'),
                  "consolidateReservation_Id": this.globalConsolidatedReservation_Id,
                  "motive_Id": motive.options[motive.selectedIndex].value,
                  "contacts": this.contactsArray
                };
                this._tokenService.token().subscribe(token => {
                  this.apiService.saveIropsContactsReservation(bodyIrops, token.Data.accessToken).subscribe(async (responseSave: messageSaveIropsReservation) => {
                    this.loading = false;
                    if (responseSave.IsSuccess) {
                      swal({
                        type: 'success',
                        title: 'Enhorabuena...',
                        text: responseSave.Data,
                        confirmButtonText: messagesApp.buttonAcept,
                        confirmButtonColor: '#dc3545'
                      });
                    } else {
                      swal({
                        type: 'error',
                        title: 'Oops...',
                        text: responseSave.Data,
                        confirmButtonText: messagesApp.buttonAcept,
                        confirmButtonColor: '#dc3545'
                      });
                    }

                    this.objHeader = null;
                    this.emitHeader.emit(this.objHeader);
                    this.optionView = false;
                  },
                    err => {
                      this.loading = false;
                    });
                },
                  err => {
                    this.loading = false;
                  });
              }else{
                //Guardar eventos
                
              }
            }
          }
        }
      }
    })
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.objPassengersInfo) {
      for (let i = 0; i < this.objPassengersInfo.length; i++) {
        let rowData = this.objPassengersInfo[i];
        let firstName = rowData.firstName;
        if (i == 0) {
          this.rowGroupMetadata[firstName] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.objPassengersInfo[i - 1];
          let previousRowGroup = previousRowData.firstName;
          if (firstName === previousRowGroup)
            this.rowGroupMetadata[firstName].size++;
          else
            this.rowGroupMetadata[firstName] = { index: i, size: 1 };
        }
      }
    }
  }

  getValidators(consolidatedReservation_Id: string) {
    this.globalConsolidatedReservation_Id = consolidatedReservation_Id;
    this._tokenService.token().subscribe(token => {
      this.apiService.getReservationDetail(consolidatedReservation_Id, sessionStorage.getItem('user_id'), token.Data.accessToken).subscribe(async (responseReservations: message) => {
        if (responseReservations.Data != null) {
          this.objFrontOutboundReserve = responseReservations.Data;
          this.objHeader = this.objFrontOutboundReserve.headerInfo;
          this.objPassengersInfo = this.objFrontOutboundReserve.passengersInfo;
          this.objFrequentTravellersInfo = this.objFrontOutboundReserve.frequentTravellersInfo;
          this.objItinerariesInfo = this.objFrontOutboundReserve.itinerariesInfo;
          this.objSpecialServicesInfo = this.objFrontOutboundReserve.specialServicesInfo;
          this.optionGestion = this.objFrontOutboundReserve.motivesInfo;
          this.updateRowGroupMetaData();
          this.optionView = true;
          this.loading = false;
          this.flagTipificacion = true;

          if (this.objHeader.motiveDescription === resources.contactTypeName) {
            this.isContactType = true;
          } else {
            this.isEventType = true;
          }

          if (this.objPassengersInfo.length == 0) {
            this.isPassenger = false;
          }
          else {
            this.isPassenger = true;
          }

          if (this.objFrequentTravellersInfo.length == 0) {
            this.isFrequentTraveller = false;
          } else {
            this.isFrequentTraveller = true;
          }

          if (this.objItinerariesInfo.length == 0) {
            this.isItinerary = false;
          } else {
            this.isItinerary = true;
          }

          if (this.objSpecialServicesInfo.length == 0) {
            this.isSpecialService = false;
          } else {
            this.isSpecialService = true;
          }

          this.emitHeader.emit(this.objHeader);
        } else {
          this.optionView = false;
          this.loading = false;
          this.flagTipificacion = true;
          swal({
            title: 'Error!',
            text: responseReservations.ReturnMessage,
            type: 'error',
            confirmButtonText: messagesApp.buttonAcept,
            confirmButtonColor: '#dc3545'
          });
          this.router.navigateByUrl('/site/(route1:iropsvalidations)');
        }
      },
        err => {
          this.loading = false;
        });

    });
  }

  // tabla de insert de contactos 

  addFieldValue() {
    let contactType: any = document.getElementById('lstContactTypes');
    let contactName = this.contactTypeName;
    let realcontact: string;

    if (this.isPhone) {
      realcontact = contactName.internationalNumber;
    } else {
      realcontact = contactName;
    }

    this.newAttribute = {
      "contactType_Id": contactType.value,
      "contactTypeDescription": contactType.options[contactType.selectedIndex].text,
      "description": realcontact,
    };

    let result = this.contactsArray.filter(filterContacts => filterContacts.contactType_Id == contactType.value &&
      filterContacts.description == contactName)

    let resultPassenger = this.objPassengersInfo.filter(filterContacts => filterContacts.descriptionCT == contactType.options[contactType.selectedIndex].text &&
      filterContacts.descriptionC == contactName)


    if (result.length === 0 && resultPassenger.length === 0) {
      this.contactsArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {
      swal({
        type: 'warning',
        title: 'Oops...',
        text: 'ya existe el contacto',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#de0108'
      });
    }

    this.contactTypeName = null;
  }

  deleteFieldValue(index) {
    this.contactsArray.splice(index, 1);
  }

  contactTypeChange(event: any) {
    if (event != null) {
      if (event.target.value === resources.contactTypePhoneId)
        this.isPhone = true;
      else
        this.isPhone = false;
    } else {
      this.isPhone = false;
    }
    this.contactTypeName = null;
  }
}


