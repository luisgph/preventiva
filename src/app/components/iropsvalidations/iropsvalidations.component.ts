import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TokenService } from '../../services/token.service';
import { ValidationListModel } from '../../models/validation-list-model';
import { messageValidationListModel } from '../../models/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iropsvalidations',
  templateUrl: './iropsvalidations.component.html',
  styles: []
})
export class IropsvalidationsComponent implements OnInit {
  objReservations: ValidationListModel;
  loading: boolean;
  cols: any[];

  constructor(private apiService: ApiService, private _tokenService: TokenService, private router: Router ) { 
    this.cols = [
      { field: 'reservationNumber', header: 'Numero de reserva' },
      { field: 'userManagement', header: 'Usuario gestionando' },
      { field: 'motiveDescription', header: 'Motivo' }
    ];
  }

  ngOnInit() {
    sessionStorage.setItem('module', 'irops');
    this.loading = true;
    this._tokenService.token().subscribe(token => {
      this.apiService.getListOfReservationsToValidate(token.Data.accessToken).subscribe(async (responseReservations: messageValidationListModel) => {
        this.objReservations = responseReservations.Data;
        this.loading = false;
      });
    });
  }

  openReservation(consolidatedReservation_id : string){
    this.router.navigateByUrl('/site/(route1:iropsvalidationsdetails/'+consolidatedReservation_id+')'); 
  }


}
