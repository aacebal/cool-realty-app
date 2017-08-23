import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { SinglePlaceComponent } from './single-place/single-place.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'miami', component: SelectionScreenComponent},
    { path: 'place/:id', component: SinglePlaceComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '' }
];
