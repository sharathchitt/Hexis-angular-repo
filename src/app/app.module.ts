import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { AngularEmojisModule } from 'angular-emojis';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisteruserComponent,
    LoginComponent,
    ForgotpassComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularEmojisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
