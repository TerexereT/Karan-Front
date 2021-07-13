import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public modalRef: MDBModalRef,
    private router: Router,
    private fB: FormBuilder,
    // private formBuilder: FormBuilder,
    
              ) {
    this.loginForm = fB.group({
      user: [''],
      password: [''],
    })
     //this.router.navigateByUrl('/index')
  }
 

  ngOnInit(): void { }


  logearse(){

    this.router.navigateByUrl('/index')
  }
}
