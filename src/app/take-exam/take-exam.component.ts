import { Component, OnInit } from '@angular/core';
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

  examLevel : string;
  
  questionsList : QuestionDetailsDto[];

  i : number = 0;

  
  nextQuestion()
  {
    this.i++;
  }

  previousQuestion()
  {
    this.i--;
  }
  // viewQuestionsForExam(){
  //   //  console.log(JSON.parse(sessionStorage.getItem("examSpec")))
  //   //  console.log(JSON.parse(sessionStorage.getItem("examLevel")))
    
    
  //   this.examInformationDto.examLevel = sessionStorage.getItem('examLevel');
  //   this.examInformationDto.examSpecialization = sessionStorage.getItem('examSpec');

  //   this.service.getQuestionsForExam(this.examInformationDto).subscribe(data => 
  //     {
  //     this.questionsList = data;
  //     console.log(data);
  //   })
  // }

}
