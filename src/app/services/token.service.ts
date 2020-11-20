import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { messageToken } from '../models/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  env = environment;

  constructor(private http: HttpClient) { }

  token(): Observable<messageToken> {
    const headers = new HttpHeaders({
      'Clientid': '76fbb33b-a2ab-4967-a072-c29828f114f6',
      'Secretkey': 'df3b8844-8744-4b9e-8eb6-68869f2890f2'
    })
    return this.http.post<messageToken>(this.env.preventivaUrl + 'token', {}, { headers });
  }
}

