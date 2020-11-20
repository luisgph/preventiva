import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel, message, tipificacion, motivesInfo, stateManagement, messageStateManagement, messageChangeStateManagement, messageSaveOutboundReservation, messageSaveInboundReservation, messageChangeUserStateManagementToDisconect, frontLoginRequest } from '../models/models';
import { environment } from '../../environments/environment'
import { messageSite, messageLogin, messageToken, messageValidationListModel, messageContactTypeModel, messageAffectationTypeByHistories, messageSaveIropsReservation } from '../models/message';
import { TokenHelper } from '../helpers/token-helper';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = environment;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  login(body: any, token: string): Observable<messageLogin> {
    return this.http.post<messageLogin>(this.env.preventivaUrl + 'api/Users/Login', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  logout(body: any, token: string): Observable<messageLogin> {
    return this.http.post<messageLogin>(this.env.preventivaUrl + 'api/Users/logout', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }


  outbound(body: any, token: string): Observable<message> {
    return this.http.post<message>(this.env.preventivaUrl + 'api/OutBound/GetOutBoundReservation', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  inbound(body: any, token: string): Observable<message> {
    return this.http.post<message>(this.env.preventivaUrl + 'api/InBound/GetInBoundReservation', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  optionState(token: string): Observable<messageStateManagement> {
    return this.http.get<messageStateManagement>(this.env.preventivaUrl + 'api/StateManagements/GetStatesManagements', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  changeStateManagement(body: any, token: string): Observable<messageChangeStateManagement> {
    return this.http.post<messageChangeStateManagement>(this.env.preventivaUrl + 'api/StateManagements/ChangeStateManagement', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  saveOutboundReservation(body: any, token: string): Observable<messageSaveOutboundReservation> {
    return this.http.post<messageSaveOutboundReservation>(this.env.preventivaUrl + '/api/OutBound/SaveOutBoundReservation', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  saveInboundReservation(body: any, token: string): Observable<messageSaveInboundReservation> {
    return this.http.post<messageSaveInboundReservation>(this.env.preventivaUrl + '/api/InBound/SaveInBoundReservation', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  changeUserStateManagementToDisconect(body: any, token: string): Observable<messageChangeUserStateManagementToDisconect> {
    return this.http.post<messageChangeUserStateManagementToDisconect>(this.env.preventivaUrl + 'api/StateManagements/ChangeUserStateManagementToDisconect ', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  site(token: string): Observable<messageSite> {
    return this.http.get<messageSite>(this.env.preventivaUrl + 'api/Sites/GetSites', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  getListOfReservationsToValidate(token: string): Observable<messageValidationListModel> {
    return this.http.get<messageValidationListModel>(this.env.preventivaUrl + 'api/IropsValidations/getlistofreservations', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  getReservationDetail(id: string, user_id: string,  token: string): Observable<message> {
    return this.http.get<message>(this.env.preventivaUrl + 'api/IropsValidations/getReservationDetails?consolidatedReservation_Id=' + id + '&user_id=' + user_id, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }
  
  getContactTypes(token: string): Observable<messageContactTypeModel> {
    return this.http.get<messageContactTypeModel>(this.env.preventivaUrl + 'api/ContactTypes/getlistofcontactTypes', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  getAffectationTypeByHistories(token: string): Observable<messageAffectationTypeByHistories> {
    return this.http.get<messageAffectationTypeByHistories>(this.env.preventivaUrl + 'api/AffectationTypeByHistories/GetAffectationTypeByHistories', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  saveIropsContactsReservation(body: any, token: string): Observable<messageSaveIropsReservation> {
    return this.http.post<messageSaveIropsReservation>(this.env.preventivaUrl + '/api/InBound/SaveInBoundReservation', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  saveIropsEventReservation(body: any, token: string): Observable<messageSaveIropsReservation> {
    return this.http.post<messageSaveIropsReservation>(this.env.preventivaUrl + '/api/InBound/SaveInBoundReservation', body, { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }
}
