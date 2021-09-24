import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  userObj:User = new User();

  constructor() { }

  process(){
    alert('User Sucessfully Registered !');
  }

  ngOnInit(): void {
  }

}
