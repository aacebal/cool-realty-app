import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor ( private session: SessionService ) { }

  ngOnInit() {
    this.session.loggedIn$.subscribe((userFromApi) => {
      this.isLoggedIn = true;
    })
  }

  user: User;
  formInfo = {
    username: '',
    password: ''
  };

}
