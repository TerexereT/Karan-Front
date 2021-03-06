import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ModalComponent} from './modal/modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconsModule, MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule {
}
