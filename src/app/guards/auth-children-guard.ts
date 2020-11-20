import {  CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { OutboundComponent } from "../components/outbound/outbound.component";
//import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthChildrenGuard implements CanActivate{

  constructor(private customerService: CustomerService) { }

  canActivate() {
    return true;
  }
}
