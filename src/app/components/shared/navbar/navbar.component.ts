import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CustomerService } from '../../../services/customer.service';
import swal from 'sweetalert2';
import { messagesApp } from '../message/messages';
import { messageStateManagement, messageChangeStateManagement } from '../../../models/models';
import { ApiService } from '../../../services/api.service';
import { TokenService } from '../../../services/token.service';
import { messageLogin } from '../../../models/message';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  flagOutbound: boolean;
  flagInbound: boolean;
  flagSearch: boolean;
  flagIropsValidations: boolean;
  flagMenu: string;
  flagState: boolean;
  flagReexpeditions:boolean;
  env = environment;
  userName: string;
  objState: messageStateManagement;
  labelState : string;
  loading: boolean;


  constructor(private router: Router, private customer: CustomerService, private apiService: ApiService, private _tokenService: TokenService) {
    this.labelState = sessionStorage.getItem('stateManagement');
    if(this.labelState.toUpperCase() === "DISPONIBLE"){
      this.flagMenu = "";
    }else{
      this.flagMenu = "is-disabled";
    }
  }

  ngOnInit() {
    this.flagState = false;
    this._tokenService.token().subscribe(token => {
      this.apiService.optionState(token.Data.accessToken).subscribe((responseState: messageStateManagement) => {
        this.objState = responseState;
        this.flagState = true;
      },
        err => {});
    },
      err => {});

    this.userName = sessionStorage.getItem('userName');
    let views: string[] = this.customer.getViews().split(',');
    this.flagOutbound = false;
    this.flagInbound = false;
    this.flagSearch = false;
    this.flagIropsValidations = false;
    this.flagReexpeditions=false;

    views.forEach(element => {
      switch (element) {
        case 'outbound':
          this.flagOutbound = true;
          break;
        case 'inbound':
          this.flagInbound = true;
          break;
        // case 'search':
        //   this.flagSearch = true;
        //   break;
        case 'bo irops':
          this.flagReexpeditions = true;
          break;
        case 'irops_validaciones':
          this.flagIropsValidations = true;
          break;
        default:
          break;
      }
    });
  }

  Salir() {
    swal({
      title: 'Desea salir del sistema?',
      text: "",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: messagesApp.buttonAcept
    }).then((result) => {
      if (result.value) {
        this._tokenService.token().subscribe(token => {
          let body = {
            "user_Id": sessionStorage.getItem('user_id'),
            "stateManagement_Id": "",
            "case_Id": "string",
            "motive_Id": "string",
            "pnr": "string"
          };

          this.apiService.logout(body, token.Data.accessToken).subscribe(async (responseChange: messageLogin) => {
            if (responseChange.IsSuccess) {
              sessionStorage.clear();
              this.router.navigateByUrl('/login');
            }
          })
        });
      }
    })
  }

  changeState(statemanagement_id: string, description: string) {
    let localstatemanagement = sessionStorage.getItem('stateManagement_id') 
    if(statemanagement_id != localstatemanagement){
      sessionStorage.setItem('stateManagement_id', statemanagement_id);
      sessionStorage.setItem('stateManagement', description);
      this.labelState = description;

      if(this.labelState.toUpperCase() === "DISPONIBLE"){
        this.flagMenu = "";
      }else{
        this.flagMenu = "is-disabled";
      }


      let body = {
        "user_Id": sessionStorage.getItem('user_id'),
        "stateManagement_Id": statemanagement_id,
        "case_Id": "string",
        "motive_Id": "string",
        "pnr": "string"
      };

      //Cambio de estado 
      this.loading = true;
      this._tokenService.token().subscribe(token => {
        this.apiService.changeStateManagement(body, token.Data.accessToken).subscribe(async (responseChange: messageChangeStateManagement) => {
          if (responseChange.IsSuccess) {
            this.loading = false;
          }
        })
      });
    }
  }

}


