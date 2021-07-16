import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HomeComponent} from './home/home.component';
import {CoreModule} from './core/core.module';
import {ModalComponent} from './core/modal/modal.component';
import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import {MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiErrorInterceptor} from './interceptors/api-error.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    MDBSpinningPreloader,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorInterceptor,
      multi: true
    }
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
