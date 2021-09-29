
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  userObj = new User();

  constructor(private userService:UserService) { }

  process(){
    //alert('User Sucessfully Registered !\n'+JSON.stringify(this.userObj));
    sessionStorage.setItem('userObj',JSON.stringify(this.userObj));
    this.userService
    .register(this.userObj)
    .subscribe(data =>{
      //alert(JSON.stringify(data));
      if(data.status=='SUCCESS'){
        alert('You have been registered!\nYou will receive a Registered email shortly from us.');
      }
      else{
        alert(data.status);
      }
    })
  }



  ngOnInit(): void {
  }

}
