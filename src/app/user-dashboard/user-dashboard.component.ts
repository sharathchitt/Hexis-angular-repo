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
  enabled:number;
  user:User = new User();
  istopnav:boolean=false;
  
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
    //console.log(sessionStorage.getItem('fullName'));
    if(sessionStorage.getItem('fullName')==null)
      this.router.navigate(['loginLink']);
     console.log(sessionStorage.getItem('enable')); 
    if(sessionStorage.getItem('enable')=='0'){
      this.enabled=1;
      console.log(this.enabled)
    }
      
    

  constructor() { }

  ngOnInit(): void {

  }

}
