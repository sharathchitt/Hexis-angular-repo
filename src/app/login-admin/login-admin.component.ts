import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  adminObj: Admin = new Admin();

  constructor(private loginService: UserService, private router: Router) { }
  
  loginadmin() {
    // alert(JSON.stringify(this.login));
    this.loginService
    .loginAdmin(this.adminObj).subscribe(data => {
      if(data.status == 'SUCCESS') {
       
        let fullName = data.fullName;   
        let adminId = data.adminId.toString();     
        sessionStorage.setItem('fullName', fullName);
        sessionStorage.setItem('adminId', adminId);

        // alert(' Admin Logged in !!! ');
        this.router.navigate(['adminLink']);
      }
      else {
       alert('Unauthorized User !!! ');
      }
    })
  }

}
