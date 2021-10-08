import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportCardDto } from '../report-card-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-previous-reports',
  templateUrl: './previous-reports.component.html',
  styleUrls: ['./previous-reports.component.css']
})
export class PreviousReportsComponent implements OnInit {

  
  
  reportCardList:ReportCardDto[];

  
  constructor(private service:UserService,
    private router: Router) { }

  ngOnInit(): void {


    this.ReportCardsOfUser();
    sessionStorage.setItem("reportCardList",JSON.stringify(this.reportCardList))

  }

  ReportCardsOfUser(){
  
    this.service.getReportCardsOfUser(sessionStorage.getItem('userId').toString()).subscribe(data=>{
      this.reportCardList=data;
      console.log(this.reportCardList)
    })

  }

}
