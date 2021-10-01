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
    ReportCardComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularEmojisModule,
    RouterModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
