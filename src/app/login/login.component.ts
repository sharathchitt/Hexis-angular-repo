import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userObj: User = new User();

  constructor(private userService: UserService, private router:Router) { }

  process(){
    
    //alert('User Sucessfully logged in !'+'\n'+JSON.stringify(this.userObj));

    this.userService
    .loginUser(this.userObj)
    .subscribe(data => {
      if(data.status=='SUCCESS'){
        let fullName = data.fullName;
        let userId = data.userId.toString();
        sessionStorage.setItem('fullName', fullName);
        sessionStorage.setItem('userId', userId);
        
        //alert('User with the following creds logged in : \n'+data.userId+' '+data.fullName);
        this.router.navigate(['userDashboard']);
      }
      else
        alert('Unauthorized User !');
    })


  }

  ngOnInit(): void {
  }

}
