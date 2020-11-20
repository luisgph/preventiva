import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { site } from '../../models/site';
import { messageSite, messageLogin } from '../../models/message';
import swal from 'sweetalert2';
import { messagesApp } from '../shared/message/messages';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  password: string;
  objSite: site;
  flagSite: boolean;
  site: string;
  user: string;
  loading: boolean;

  constructor(private apiService: ApiService, private customer: CustomerService, private router: Router, private _tokenService: TokenService) {
    this.flagSite = false;
    this.loading = true;
    _tokenService.token().subscribe(token => {
      this.apiService.site(token.Data.accessToken).subscribe(async (responseSite: messageSite) => {
        this.loading = false;
        this.flagSite = true;
        this.objSite = responseSite.Data;
      },
        err => {
          this.loading = false;
        });
    },
      err => {
        this.loading = false;
      });
  }

  login() {
    let site_id: any = document.getElementById('site');
    let body = {
      "siteName": site_id.options[site_id.selectedIndex].text,
      "userName": this.user,
      "password": this.password
    };

    this.loading = true;
    this._tokenService.token().subscribe(token => {
      this.apiService.login(body, token.Data.accessToken).subscribe((responseLogin: messageLogin) => {
        this.loading = false;
        if (responseLogin.IsSuccess) {
          this.customer.setView(responseLogin.Data.views);
          this.customer.setToken(responseLogin.Data.user_Id);
          this.customer.setUser(responseLogin.Data.user_Id);
          sessionStorage.setItem('stateManagement_id', responseLogin.Data.stateManagement_Id);
          sessionStorage.setItem('userName', responseLogin.Data.userName);
          sessionStorage.setItem('stateManagement', responseLogin.Data.stateManagement);
          this.router.navigateByUrl('/site');
        } else {
          swal({
            type: 'error',
            title: 'Oops...',
            text: responseLogin.ReturnMessage,
            confirmButtonText: messagesApp.buttonAcept,
            confirmButtonColor: '#ff4444'
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
}

