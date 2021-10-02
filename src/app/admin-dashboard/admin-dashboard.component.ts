import { Component, OnInit } from '@angular/core';
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

  constructor(private customerService: UserService) { 
    this.adminId = sessionStorage.getItem('adminId');
  }

  ngOnInit(): void {
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
