import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  adminId: any;
  adminObj: Admin;

  constructor(private customerService: UserService, private router:Router) { 
    this.adminId = sessionStorage.getItem('adminId');
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('fullName')==null)
        this.router.navigate(['loginAdminLink']);
    this.customerService.fetchProfile(this.adminId).subscribe(data => {
      this.adminObj = data;
      
      //alert(JSON.stringify(this.adminObj));
    })
  }
  logout(){
    sessionStorage.removeItem('adminId');
    //this.router.navigate(['homeLink']);
  }

}
