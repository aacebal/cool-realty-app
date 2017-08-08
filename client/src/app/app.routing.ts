import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent},
    { path: '**', redirectTo: '' }
];
