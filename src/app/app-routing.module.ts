import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';


const routes: Routes = [
  {
    path: 'registerLink',
    component: RegisteruserComponent
  },
  {
    path: 'homeLink',
    component: LandingPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
