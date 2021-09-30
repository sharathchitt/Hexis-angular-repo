import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-yourprofile',
  templateUrl: './yourprofile.component.html',
  styleUrls: ['./yourprofile.component.css']
})
export class YourprofileComponent implements OnInit {

  adminId: any;
  admin: Admin;
  constructor(private adminService: UserService) {
    
   }

  ngOnInit(): void {
      this.adminService.fetchProfile(sessionStorage.getItem('adminId')).subscribe(data => {
      this.admin = data;
      JSON.stringify(this.admin);})
      // alert(JSON.stringify(this.admin));})
   }
  

}
