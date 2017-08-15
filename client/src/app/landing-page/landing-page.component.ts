import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SessionService } from '../services/session.service';

import { ActivatedRoute, Router} from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  user: User;
  errorMessage: string;
  isLoggedIn: boolean = false;
  loginInfo = {
    username: '',
    password: ''
  };
  signupInfo = {
    name: '',
    lastName: '',
    username: '',
    password: ''
  };
  loginReady: boolean = false;
  signupReady: boolean = false;

  constructor( private session: SessionService, private router: Router, activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.session.loggedIn$.subscribe((userFromApi) => {
    this.isLoggedIn = true;
  })
}


login() {
  this.session.login(this.loginInfo)
    .then((userFromApi) => {
      console.log(userFromApi);
      this.session.loggedIn(userFromApi);
      this.router.navigate(['/miami']);
    })
    .catch((errResponse) => {
      const apiInfo = errResponse.json();
      this.errorMessage = apiInfo.message;
    });
}

signup() {
this.session.signup(this.signupInfo)
  .then((userFromApi) => {
    this.session.loggedIn(userFromApi);
    this.router.navigate(['/miami']);
  })
}

}
