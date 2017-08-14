import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { User } from '../models/user.model';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  user: User;
  errorMessage: string;
  isLoggedIn: boolean = false

  constructor( private session: SessionService ) { }

  ngOnInit() {
    this.session.loggedIn$.subscribe((userFromApi) => {
    this.isLoggedIn = true;
  })
}

}
