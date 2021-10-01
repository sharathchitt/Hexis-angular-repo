import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { ForgotAdminPassComponent } from './forgot-admin-pass/forgot-admin-pass.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { YourprofileComponent } from './yourprofile/yourprofile.component';


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
  },
  {
    path: 'registerAdminLink',
    component: RegisterAdminComponent
  },
  {
    path: 'forgotAdminPassLink',
    component: ForgotAdminPassComponent
  },
  {
    path: 'loginAdminLink',
    component: LoginAdminComponent
  },

  {
    path: 'adminLink',
    component: AdminDashboardComponent,
    children:[
      {
        path: 'viewAdminLink', component: YourprofileComponent
      },
      {
        path: 'addQuestionLink', component: AddQuestionComponent
      },
      {
        path: 'deleteQuestionLink', component: DeleteQuestionComponent
      }
       
    ]
  },
  {
    path: 'viewAllQuestions', component: TakeExamComponent,
    
  },
  {
    path: 'reportCardLink', component: ReportCardComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
