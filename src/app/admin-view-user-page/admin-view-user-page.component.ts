import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-view-user-page',
  templateUrl: './admin-view-user-page.component.html',
  styleUrls: ['./admin-view-user-page.component.css']
})
export class AdminViewUserPageComponent implements OnInit {

  user: UserDto=new UserDto();

    constructor(private service: UserService, private router: Router) {}


    
    ngOnInit(): void {

      this.fetchUser();
      

    
  }

  fetchUser(){

    

    this.service.findOneUserById(sessionStorage.getItem('userId')).subscribe(data=>{
      if(data!=null){
        this.user=data;
        //alert(JSON.stringify(this.user)); 
      }
      else{
        //this.router.navigate(['/adminLink/viewUserLink']);
        alert('User not available');
      }
    
    })
      
  }

}
