import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertsService} from '../core/services/alerts.service';
import {Auth2Service} from '../core/services/auth/auth2.service';
import {signUp} from '../core/interfaces/auth2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fB: FormBuilder,
    private auth2Service: Auth2Service,
    private alerts: AlertsService,
  ) {
    this.registerForm = fB.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required, Validators.min(1)]],
      juridica: [false],
    });
  }


  ngOnInit(): void {
  }

  registrarError(error: [type: string, msg: any]) {
    let tipo;
    let msg;
    if (error[0] === 'username') {
      tipo = 'Usuario ';
    } else if (error[0] === 'email') {
      tipo = 'Correo ';
    } else if (error[0] === 'dni') {
      tipo = 'Cédula ';
    } else if (error[0] === 'first_name') {
      tipo = 'Nombre ';
    } else if (error[0] === 'last_name') {
      tipo = 'Apellido ';
    } else {
      tipo = 'Contraseña ';
    }

    const msgAux = error[1].toString();
    if (msgAux === 'This field must be unique.') {
      msg = 'ya existe, intente otro diferente';
    } else if (msgAux === 'Enter a valid email address') {
      msg = 'ya esta registrado';
    } else if (msgAux.indexOf('characters') !== -1) {
      msg = 'es muy corto'
    } else {
      msg = 'es invalido'
    }

    return tipo + msg;
  }


  registrarUsuario() {
    this.registerForm.markAllAsTouched()
    console.log(this.registerForm.get('dni')?.errors)
    if (this.registerForm.valid) {
      const data: signUp = {
        ...this.registerForm.value,
        password_confirmation: this.registerForm.value.password
      }
      if (this.registerForm.value.juridica) {
        this.auth2Service.registerJuridico(data).subscribe(
          () => {
            this.alerts.showAlerts('Registro Con Exito!', 'success', 'Ahora puede acceder a su cuenta.');
          },
          error => null
        )
      } else {
        this.auth2Service.registerNatural(data).subscribe(
          () => {
            this.alerts.showAlerts('Registro Con Exito!', 'success', 'Ahora puede acceder a su cuenta.');
          },
          error => null
        )
      }
    }
  }
}
