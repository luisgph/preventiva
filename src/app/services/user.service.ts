import { Injectable } from '@angular/core';
import { Iuser } from "../models/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: Iuser;

  constructor() {
  }

  /**
   * this is used to set our user object for current logged in user
   * @param user
   */
  set(user: Iuser): void {
    this.user = user;
  }

  /**
   * this is used to get our user
   * @returns {IUser}
   */
  get(): Iuser {
    return this.user;
  }

  /**
   * this is used to delete our user stored, by setting it to null
   */
  delete(): void {
    this.user = null;
  }
}
