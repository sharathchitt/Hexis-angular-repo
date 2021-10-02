import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.css']
})
export class AdminViewUserComponent implements OnInit {

  userObj : User=new User();

   constructor(private service : UserService, private router: Router) { }

   viewuser(){

      sessionStorage.setItem('userId', this.userObj.userId.toString());
      //console.log(this.userObj.userId)
      //alert('user id submitted Successfully !'+this.userObj.userId.toString()+this.userObj.fullName);  
      //this.router.navigate(['/adminLink/adminViewUserLink/adminViewUserPageLink']);
      this.router.navigate([]).then(result => {  window.open('/adminLink/adminViewUserLink/adminViewUserPageLink', '_self'); });
      
    } 

  

  ngOnInit(): void {
  }

}
