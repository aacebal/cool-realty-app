import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'miami', component: SelectionScreenComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '' }
];
