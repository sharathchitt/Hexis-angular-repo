import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  userObj: User = new User();

  constructor(private service:UserService) { }

  process()
  {
    this.service.forgotPassword(this.userObj.email)
    .subscribe(data=>{
      console.log(data);
    });
    alert('Password reset instructions sent to: '+this.userObj.email)
  }

  ngOnInit(): void {
  }

}
