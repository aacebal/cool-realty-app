import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SessionService } from './services/session.service';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
