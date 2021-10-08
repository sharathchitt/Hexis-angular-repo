import { Component, OnInit } from '@angular/core';
import { CaptureResponseDto } from '../capture-response-dto';
import { ReportCardDto } from '../report-card-dto';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-generate-users-report',
  templateUrl: './generate-users-report.component.html',
  styleUrls: ['./generate-users-report.component.css']
})
export class GenerateUsersReportComponent implements OnInit {

  constructor(private service:UserService) { }

  display:boolean=false;

  userObjArr:UserDto[] = [];
  ngOnInit(): void {
  }

  reportCardDto :CaptureResponseDto = new CaptureResponseDto();

  generateReport()
  {
    this.display=true;
    this.service.fetchUsers(this.reportCardDto)
    .subscribe(data=>{
      this.userObjArr=data;
    })
  }
}
