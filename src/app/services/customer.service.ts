import { Injectable } from '@angular/core';
import { JwtHelper } from "../helpers/jwt-helper";
import { Observable } from "rxjs";

const TOKEN = 'accessToken';
const USER_ID = 'user_id';
const VIEW = 'views';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _jwt: JwtHelper = new JwtHelper();
  private redirectUrl: string;
  public message: string;

  constructor() { }

  setToken(token: string): void {
    sessionStorage.setItem(TOKEN, token);
  }

  setUser(user_id: string): void {
    sessionStorage.setItem(USER_ID, user_id);
  }

  getUser(): string {
    return sessionStorage.getItem(USER_ID);
  }

  setView(views: string[]): void {
    sessionStorage.setItem(VIEW, views.toString());
  }

  getViews(): string {
    return sessionStorage.getItem(VIEW);
  }

  isLogged() {
    return sessionStorage.getItem(TOKEN) != null;
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem(TOKEN) != null && !this._jwt.isTokenExpired();
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * this returns the token for the user
   * @param email
   * @param password
   */
  authenticate(email: string, password: string): Observable<string> {
    //return this._apiHandler.callService("/user/login", RequestMethod.Post, { email: email, password: password })
    //  .map(res => <string>res.text())
    //  .do((token: string) => {
    //    localStorage.setItem('token', token);
    //    this._userService.set(this._jwt.decodeToken());
    //  });
    return null;
  }

  /**
   * this is used to alert our caller if we should go get token for next request or
   * to be carried out request
   *
   * @param threshold_seconds  is like a threshold to check if we should or not check for token
   * default we use 2min before the token expires
   *
   * @return {boolean}
   */
  shouldIGetToken(threshold_seconds: number = 120): boolean {
    let expDate = this._jwt.getTokenExpirationDate().valueOf() - (threshold_seconds * 1000);

    return new Date().valueOf() > expDate;
  }

  /**
   * this is used to retrieve a newer token since the current one is going to expire soon
   *
   */
  retrieveToken(): Observable<string> {
    //return this._apiHandler.callService("/user/token", RequestMethod.Get)
    //  .map(res => <string>res.text())
    //  .do((token: string) => {
    //    this.clear();
    //    localStorage.setItem('token', token);
    //    this._userService.set(this._jwt.decodeToken());
    //  });
    return null;
  }
}
