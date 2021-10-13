import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  istopnav:boolean=true;
  enabled:number=0;
  ngOnInit(): void {
    //sessionStorage.setItem('enable', this.enabled.toString());
    //console.log(sessionStorage.getItem('enable'))
  }
  title = 'hexis-app';
}
