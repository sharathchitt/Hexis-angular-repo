import { Component, OnInit } from '@angular/core';
import { DeleteQuestionDto } from '../delete-question-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  deleteQuestion : DeleteQuestionDto = new DeleteQuestionDto 
  status : string;
  constructor(private service : UserService) { }

  ngOnInit(): void {
  }

  deleteQuestions(){
    console.log(this.deleteQuestion)
    alert('Question deleted Successfully !');
    this.service.deleteQuestion(this.deleteQuestion).subscribe( data=> {
      this.status = data;
      
    })
  }

}
