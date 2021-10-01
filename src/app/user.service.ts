import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { CaptureResponseDto } from './capture-response-dto';
import { DeleteQuestionDto } from './delete-question-dto';
import { ExamInformationDto } from './exam-information-dto';
import { Login } from './login';
import { Loginstatus } from './loginstatus';
import { MarksDto } from './marks-dto';
import { User } from './model/user';
import { QuestionDetailsDto } from './question-details-dto';
import { Status } from './status';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public register(userSend:User):Observable<Status>{

    
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

  public registerAdmin(admin:Admin):Observable<Status>{
    let url='http://localhost:8585/registerAdmin';
    return this.http.post<Status>(url,admin);
  }

  public fetchProfile(adminId: string) : Observable<Admin> {
    let url='http://localhost:8585/profileAdmin?adminId='+adminId;
    return this.http.get<Admin>(url);
  }

  public loginAdmin(login: Login) : Observable<Loginstatus>  {
    let url = 'http://localhost:8585/loginAdmin';
    return this.http.post<Loginstatus>(url, login);
  }

  public addQuestionsForExam(questionDetailsDto :  QuestionDetailsDto):Observable<any>{
    let url = 'http://localhost:8585/addQuestion/';
    return this.http.post(url,questionDetailsDto);
  }

  public deleteQuestion(deleteQuestionDto : DeleteQuestionDto):Observable<any>{
    let url = 'http://localhost:8585/deleteQuestion/';
    return this.http.post(url,deleteQuestionDto);
  }

  searchQuestion(questionId : string):Observable<QuestionDetailsDto>{
    let url = 'http://localhost:8585/searchSingleQuestion?questionId='+questionId;
    return this.http.get<QuestionDetailsDto>(url);
  }
  
  getQuestionsForExam(examInformationDto :ExamInformationDto):Observable<QuestionDetailsDto[]>{
    let url = 'http://localhost:8585/viewAllQuestions/';
    return this.http.post<QuestionDetailsDto[]>(url,examInformationDto);
  }
  marks:number;
  sendResponses(captureResponseDto: CaptureResponseDto):Observable<MarksDto>{
    let url = 'http://localhost:8585/evaluate/';
 
    return  this.http.post<MarksDto>(url, captureResponseDto);
  }
  

}
