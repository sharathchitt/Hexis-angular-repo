import { Component, OnInit } from '@angular/core';
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

  examSpecDetail:string;
  examLevelDetail:string;
  marksString:string;
  statusString:string;

  marksObj:MarksDto = new MarksDto();

  userObj:UserDto = new UserDto();

  constructor(private service:UserService) { }

  ngOnInit(): void {
    
    this.service.findOneUserById(sessionStorage.getItem('userId'))
    .subscribe(data=>{
      this.userObj=data;
    })

    this.marksObj.marks = sessionStorage.getItem('marks');
    this.marksObj.status = sessionStorage.getItem('status');
    this.marksString = sessionStorage.getItem('marks');
    this.statusString = sessionStorage.getItem('status');

    console.log(sessionStorage.getItem('marks'))
    console.log(sessionStorage.getItem('status'))
    this.examSpecDetail = sessionStorage.getItem('examSpec');
    this.examLevelDetail = sessionStorage.getItem('examLevel');
    // this.capturedString = sessionStorage.getItem('capturedResponses');
    // console.log(this.capturedString);
    // this.capturedResponses = JSON.parse(this.capturedString);
    // console.log(this.capturedResponses);
    
  }

}
