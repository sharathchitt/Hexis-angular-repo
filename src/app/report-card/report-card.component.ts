import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaptureResponseDto } from '../capture-response-dto';
import { MarksDto } from '../marks-dto';
import { User } from '../model/user';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  //user:User;
  capturedResponses:CaptureResponseDto = new CaptureResponseDto();

  capturedString:string;

  levelButton:number=1;

  examSpecDetail:string;
  examLevelDetail:string;
  marksString:string;
  statusString:string;

  marksObj:MarksDto = new MarksDto();

  userObj:UserDto = new UserDto();

  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
    
    this.service.findOneUserById(sessionStorage.getItem('userId'))
    .subscribe(data=>{
      this.userObj=data;
    })

    //this.marksObj.marks = sessionStorage.getItem('marks');
    //this.marksObj.status = sessionStorage.getItem('status');
    this.marksString = sessionStorage.getItem('marks');
    this.statusString = sessionStorage.getItem('status');
    if(this.statusString=='PASS'){
      console.log('The user has passed')
      this.levelButton=1;
    }
    else if(this.statusString=='FAIL'){
      this.levelButton=2;
    }
    console.log(sessionStorage.getItem('marks'))
    console.log(sessionStorage.getItem('status'))
    this.examSpecDetail = sessionStorage.getItem('examSpec');
    this.examLevelDetail = sessionStorage.getItem('examLevel');
    //alert('This report was sent to your registered Email ID !');
    // this.capturedString = sessionStorage.getItem('capturedResponses');
    // console.log(this.capturedString);
    // this.capturedResponses = JSON.parse(this.capturedString);
    // console.log(this.capturedResponses);
    
  }

  proceed(){
    this.router.navigate(['/userDashboard/selectExamLink']);
  }

  proceedBack(){
    this.router.navigate([]).then(result => {  window.open('viewAllQuestions', '_self'); });
  }

  sendMail(){
    alert('This report was sent to your registered Email ID !');
  }

}
