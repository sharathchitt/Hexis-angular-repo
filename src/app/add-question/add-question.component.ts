import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionDetailsDto } from '../question-details-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private service: UserService, private router:Router) { 

  }
  addQuestionDto1 : QuestionDetailsDto = new QuestionDetailsDto();

  noOfQuestions : number;
  questionsList = [];
 
  ngOnInit(): void {
   }

   createSlots(){
    for(let i=0; i<this.noOfQuestions; i++){
      this.questionsList.push(this.addQuestionDto1);
    }
  }
   status : string;
   addQuestions(){
    console.log(this.addQuestionDto1)
    this.service.addQuestionsForExam(this.addQuestionDto1).subscribe((data)=>{
      //this.status=JSON.parse("data");
      if(data!=null){
        alert("Question is added successfully")
         console.log(this.status)
      }
    },(err)=>{
      alert("Failed to add questions")
      console.log(err)
    })
  
  }
   addQuestionsToExam(){
    console.log(this.addQuestionDto1)
    this.addQuestions();
   }


  resetForm(){
    this.router.navigate([]).then(result => {  window.open('adminLink/addQuestionLink', '_self'); });
  } 

}
