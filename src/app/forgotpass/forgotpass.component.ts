import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  userObj: User = new User();

  constructor() { }

  process()
  {
    alert('Password reset instructions sent to: '+this.userObj.userEmail)
  }

  ngOnInit(): void {
  }

}
