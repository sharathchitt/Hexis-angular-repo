import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { AngularEmojisModule } from 'angular-emojis';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ForgotAdminPassComponent } from './forgot-admin-pass/forgot-admin-pass.component';
import { YourprofileComponent } from './yourprofile/yourprofile.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { PreviousReportsComponent } from './previous-reports/previous-reports.component';
import { GenerateUsersReportComponent } from './generate-users-report/generate-users-report.component';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';
import { AdminViewUserPageComponent } from './admin-view-user-page/admin-view-user-page.component';
import { AboutUsComponent } from './about-us/about-us.component';


import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,

    RegisteruserComponent,
    LoginComponent,
    ForgotpassComponent,
    UserDashboardComponent,
    ViewProfileComponent,
    SelectExamComponent,
    TakeExamComponent,
    RegisterAdminComponent,
    AddQuestionComponent,
    AdminDashboardComponent,
    DeleteQuestionComponent,
    LoginAdminComponent,
    ForgotAdminPassComponent,
    YourprofileComponent,
    ReportCardComponent,
    PreviousReportsComponent,
    GenerateUsersReportComponent,
    AdminViewUserComponent,
    AdminViewUserPageComponent,
    AboutUsComponent
    UserDashboardComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularEmojisModule,
    RouterModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
