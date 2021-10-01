import { Component, OnInit } from '@angular/core';
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

  constructor(private service : UserService) { }

  ngOnInit(): void {
    
        //  console.log(JSON.parse(sessionStorage.getItem("examSpec")))
        //  console.log(JSON.parse(sessionStorage.getItem("examLevel")))
        
        this.examInformationDto.examLevel = sessionStorage.getItem('examLevel');
        this.examInformationDto.examSpecialization = sessionStorage.getItem('examSpec');
        this.captures.userId=JSON.parse(sessionStorage.getItem('userId'));
        console.log(JSON.parse(sessionStorage.getItem('userId')))
        this.service.getQuestionsForExam(this.examInformationDto).subscribe(data => 
          {
          this.questionsList = data;
          console.log(data);
        })
      
  }

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

  responseStringArr:string[] = [];

  capture(response:string, responseId:number){
    console.log(response+' '+responseId)
    this.responseStringArr[responseId]=response;
    this.countSet.add(responseId);
    
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
    })  
    alert('Exam was ended !')
    open('/userDashboard', '_self').close();
  }

  previousQuestion()
  {
    this.i--;
  }
  

}
