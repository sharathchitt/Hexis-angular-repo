import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


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
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent,
    children:[
      {
        path: 'viewUserProfile', component: ViewProfileComponent
      },
      {
        path:'selectExamLink', component: SelectExamComponent
      }
       
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
