import { HttpHeaders } from "@angular/common/http";
import { TokenService } from "../services/token.service";

export class TokenHelper {
  token: string;

  constructor() { }

  tokenAuthenticate(newToken: string, newExpires: Date): string {
    let token = sessionStorage.getItem('accessToken');
    if (token === null) {
      sessionStorage.setItem('accessToken', newToken);
      sessionStorage.setItem('expires', newExpires.toString());
      return newToken;
    } else {
      let dateTokenExpires = new Date(sessionStorage.getItem('expires'));
      let dateNow = new Date;
      if (dateTokenExpires < dateNow) {
        sessionStorage.setItem('accessToken', newToken);
        sessionStorage.setItem('expires', newExpires.toString());
        return newToken;
      } else {
        return sessionStorage.getItem('accessToken');
      }
    }
  }
}
