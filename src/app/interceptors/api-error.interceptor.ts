import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AlertsService} from '../core/services/alerts.service';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          this.alertService.showError('Error de red ocurrido', 'Error')
        } else {
          if (error.error[Object.keys(error.error)[0]] instanceof Array){
            this.alertService.showError(error.error[Object.keys(error.error)[0]][0],Object.keys(error.error)[0])
          }
          if (typeof error.error[Object.keys(error.error)[0]] === 'string'){
            this.alertService.showError(error.error[Object.keys(error.error)[0]],Object.keys(error.error)[0])
          }
        }
        return throwError(error);
      })
    );
  }
}
