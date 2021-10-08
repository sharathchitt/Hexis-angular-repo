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
  examStatus:string;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.examStatus=sessionStorage.getItem('status');
    this.examStatus=localStorage.getItem('status');
    console.log(localStorage.getItem('status'));
  }

  selectedExam(examSpec:string){
    sessionStorage.setItem('examSpec',examSpec);
    sessionStorage.setItem('examLevel',this.examLevel);
    //alert(this.examLevel+' was selected');
    this.router.navigate([]).then(result => {  window.open('viewAllQuestions', '_blank'); });

  }

 

}
