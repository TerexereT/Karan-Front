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
          this.alertService.showSnackbar('Error de red ocurrido')
        } else {
          switch (typeof error.error.error){
            case 'string':
              this.alertService.showSnackbar(error.error.error)
              break
            case 'object':
              this.alertService.showSnackbar(error.error.keys)
              break
          }
        }
        return throwError(error);
      })
    );
  }
}
