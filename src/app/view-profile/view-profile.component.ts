import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user: User = new User();

  constructor(private userService:UserService) { 

    // this.user=JSON.parse(sessionStorage.getItem('userObj'));
  }

 

  ngOnInit(): void {
    this.userService
    .findOneUserById(sessionStorage.getItem('userId'))
    .subscribe(data=>{
      this.user=data;
      //alert(JSON.stringify(this.user));
    });
  }

}
