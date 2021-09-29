import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-exam',
  templateUrl: './select-exam.component.html',
  styleUrls: ['./select-exam.component.css']
})
export class SelectExamComponent implements OnInit {

  subjectList: string[]=["Python","Java","C#","SQL"];

  examSpec:string;
  examLevel: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedExam(examSpec:string){
    sessionStorage.setItem("examSpec",examSpec);
    sessionStorage.setItem("examLevel",this.examLevel);
    alert(this.examLevel+' was selected');

  }

 

}
