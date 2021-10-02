import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { CaptureResponseDto } from '../capture-response-dto';
import { ExamInformationDto } from '../exam-information-dto';
import { QuestionDetailsDto } from '../question-details-dto';
import { ResponseList } from '../response-list';
import { UserService } from '../user.service';





@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.css']
})
export class TakeExamComponent implements OnInit {

  
  

//everySecond: Observable<number> = timer(0, 1000);

  constructor(private service : UserService, private router:Router) { }
  checkedProp:boolean=false;
  buttonStatus : number =0;
  counter:number;
  timeUp:number=0;
  minutes:number;
  second:number;
  
  minString : string
  secString : string
  startCountdown(t) {
  
     this.minutes = Math.floor((t / 1000 / 60) % 60);
     this.second =  Math.floor((t / 1000) % 60); 
    const interval = setInterval(() => {
      console.log(('0'+this.minutes).slice(-2));
      console.log(('0'+this.second).slice(-2));
      this.minString=('0'+this.minutes).slice(-2);
      this.secString=('0'+this.second).slice(-2);
      this.second--;
      if(this.second==-1)
      {

        this.minutes--;
        this.second=59;
      }  
      if (this.second <0 || this.minutes <0 ) {
        clearInterval(interval);
        this.timeUp=1;
        
        console.log('Ding!');
        this.endExam();
      }
    }, 1000);
  }
  
  ngOnInit(): void {

    
       this.counter=600000;
       this.startCountdown(this.counter);
        //  console.log(JSON.parse(sessionStorage.getItem("examSpec")))
        //  console.log(JSON.parse(sessionStorage.getItem("examLevel")))
        
        this.examInformationDto.examLevel = sessionStorage.getItem('examLevel');
        this.examInformationDto.examSpecialization = sessionStorage.getItem('examSpec');
        this.captures.userId=JSON.parse(sessionStorage.getItem('userId'));
        //this.captures.userDetail.userId = JSON.parse(sessionStorage.getItem('userId'));
        //console.log(JSON.parse(sessionStorage.getItem('userId')))
        this.service.getQuestionsForExam(this.examInformationDto).subscribe(data => 
          {
          this.questionsList = data;
          console.log(data);
        })
      
  }
  control:number=0;
  examInformationDto : ExamInformationDto = new ExamInformationDto();

  responsesList : ResponseList[];
   
  rL= [];

  userId : number;

  examSpec : string;

  countSet:Set<Number> = new Set<Number>();

  examLevel : string;
  
  questionsList : QuestionDetailsDto[];

  i : number = 0;

  radioStatus:boolean;

  captureQid:number;

  responseStringArr:string[] = ['E','E','E','E','E','E','E','E','E','E'];

  capture(response:string, responseId:number){
    console.log(response+' '+responseId)
    this.responseStringArr[responseId]=response;
    this.countSet.add(responseId);
    this.buttonStatus=1;
    
    //this.captureQid=this.responsesList[responseId].questionId;
    //console.log(this.captureQid)
  }

  resetbtn() {
    //console.log(event.target['checked']);
    console.log('reset called')
    this.radioStatus = false;
 }

 

  
  nextQuestion()
  {
    this.i++;
    this.buttonStatus=0;
    this.checkedProp=null;
    // document.getElementsByName['option1'][0].checked=false;
    // document.getElementsByName['option1'][1].checked=false;
    // document.getElementsByName['option1'][2].checked=false;
    // document.getElementsByName['option1'][3].checked=false;
    
    // var ele=(RADIO)document.getElementsByName('option1');
    // for(var i=0;i<ele.length;i++){
    //   ele[i].checked=false;
    // }

    // document.getElementById('r1').checked=false;
    
  }

 captures:CaptureResponseDto = new CaptureResponseDto();
 
 


  endExam(){
    this.control=1;
    for(var i=0;i<this.responseStringArr.length;i++)
      console.log(this.responseStringArr[i]+'\n');
    console.log(sessionStorage.getItem('examLevel'));
    
     this.captures.examLevel =  sessionStorage.getItem('examLevel');
     this.captures.examSpecialization = sessionStorage.getItem('examSpec');
     this.captures.studentResponse=this.responseStringArr;
     console.log(this.captures);
    this.service.sendResponses(this.captures)
    .subscribe(data=>{
      console.log(JSON.stringify(data));
      
      sessionStorage.setItem('marks', data.marks.toString());
      sessionStorage.setItem('status', data.status);
      //sessionStorage.setItem('capturedResponses', JSON.stringify(data));
    })  
    alert('Exam was ended !')
    this.router.navigate([]).then(result => {  window.open('reportCardLink', '_self'); });
    // this.router.navigate(['reportCardLink']);
    //open('/userDashboard', '_self').close();
  }

  
  previousQuestion()
  {
    //this.buttonStatus=0;
    this.i--;
  }
  

}
