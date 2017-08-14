import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor( private session: SessionService, private router: Router ) { }

    user: User;
    formInfo = {
      name: '',
      lastName: '',
      username: '',
      password: ''
    };

    errorMessage: string;
    isLoggedIn: boolean = false

  ngOnInit() {
    this.session.loggedIn$.subscribe((userFromApi) => {
      this.isLoggedIn = true;
    })
  }

  signup() {
  this.session.signup(this.formInfo)
    .then((userFromApi) => {
      this.session.loggedIn(userFromApi);
    })
}

}
