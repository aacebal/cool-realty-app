import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [Modal]
})
export class LandingPageComponent implements OnInit {

  popup: SignupComponent;

  constructor(public modal: Modal) { }

  ngOnInit() {
  }
 openCustom() {
    return this.modal.open(LoginComponent, BSModalContext);
  }

}
