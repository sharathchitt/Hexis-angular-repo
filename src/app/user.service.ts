import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loginstatus } from './loginstatus';
import { User } from './model/user';
import { Status } from './status';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public register(userSend:User):Observable<Status>{

    // var sendUser = {
    //   "userName" : JSON.stringify(userSend.userName),
    //   "userEmail" : userSend.userEmail,
      
    // }
    let url='http://localhost:8585/registerme/';
    
    return this.http.post<Status>(url,userSend, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }

  public loginUser(userSend: User):Observable<Loginstatus>{

    let url = 'http://localhost:8585/login';
    
    return this.http.post<Loginstatus>(url, userSend,{
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })

  }

  public findOneUserById(userId:string):Observable<UserDto>{

    let url = 'http://localhost:8585/viewuser?userId='+userId;

    return this.http.get<UserDto>(url);
  }



}
