import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { messagesApp } from '../components/shared/message/messages';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
          }
        }, error => {
          // http response status code
          //console.log("----response----");
          //console.error(error);
          //console.error("status code:");
          //console.error(error.status);
          //console.error(error.message);
          //console.log("--- end of response---");
          if (error.status === 500 || error.status === 0) {
            swal({
              type: 'error',
              title: 'Oops...',
              text: messagesApp.messageErrorGeneral,
              confirmButtonText: messagesApp.buttonAcept,
              confirmButtonColor: '#dc3545'
            });
          }
          if (error.status === 401) {
            swal({
              type: 'error',
              title: 'Oops...',
              text: messagesApp.messageUnauthorized,
              confirmButtonText: messagesApp.buttonAcept,
              confirmButtonColor: '#dc3545'
            });
          }

          if (error.status === 403) {
            swal({
              type: 'error',
              title: 'Oops...',
              text: messagesApp.messageUnavailable,
              confirmButtonText: messagesApp.buttonAcept,
              confirmButtonColor: '#dc3545'
            });
          }
        })
      )
  }
}
