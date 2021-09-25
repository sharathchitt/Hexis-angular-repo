import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';


const routes: Routes = [
  {
    path: 'registerLink',
    component: RegisteruserComponent
  },
  {
    path: 'homeLink',
    component: LandingPageComponent
  },
  {
    path: 'loginLink',
    component: LoginComponent
  },
  {
    path: 'forgotLink',
    component: ForgotpassComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
