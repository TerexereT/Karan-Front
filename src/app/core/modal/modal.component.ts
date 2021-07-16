import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'ng-uikit-pro-standard';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {loginPost} from '../interfaces/auth2';
import {environment} from '../../../environments/environment';
import {Auth2Service} from '../services/auth/auth2.service';
import {AlertsService} from '../services/alerts.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public modalRef: MDBModalRef,
              private fB: FormBuilder,
              private auth2Service: Auth2Service,
              private alertService: AlertsService,
              private router: Router) {
    this.loginForm = fB.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      let data: loginPost = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
        client_id: environment.api.client_id,
        client_secret: environment.api.client_secret,
        grant_type: 'password'
      }
      this.auth2Service.getAccessToken(data).subscribe(
        value => {
          console.log(value)
        },
        error => null
      )
    }
  }
}
