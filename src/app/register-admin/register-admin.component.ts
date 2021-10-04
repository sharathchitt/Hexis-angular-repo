import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  adminObj=new Admin();
  constructor(private adminService:UserService, private router:Router) { }
  
  ngOnInit(): void {
  }

  process(){
    // alert('Admin Sucessfully Registered !\n'+JSON.stringify(this.adminObj));

    //alert(JSON.stringify(this.customer));
    this.adminService.registerAdmin(this.adminObj).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {

        alert('You have been registered!\nYou will receive a email shortly from us to confirm your registration.');
      }
      else {
        //missing code right now
        alert(data.status);
      }
    })

    this.router.navigate(['loginAdminLink']);
  }

}
