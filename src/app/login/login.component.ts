import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userObj: User = new User();

  constructor() { }

  process(){
    
    alert('User Sucessfully logged in !'+'\n'+JSON.stringify(this.userObj));
  }

  ngOnInit(): void {
  }

}
