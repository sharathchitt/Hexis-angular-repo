import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userId:number;
  examId:number;
  user:User = new User();
  
  
  noExams:boolean=false;

  constructor(private router: Router) {
    //this.user.fullName='Sharath';
    this.user.fullName=sessionStorage.getItem('fullName');
  }

  logout(){
    sessionStorage.removeItem('fullName');
    //this.router.navigate(['homeLink']);
  }

  ngOnInit(): void {

    
    
  }

}
