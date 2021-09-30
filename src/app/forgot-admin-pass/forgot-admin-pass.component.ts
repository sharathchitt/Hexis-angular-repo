import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-forgot-admin-pass',
  templateUrl: './forgot-admin-pass.component.html',
  styleUrls: ['./forgot-admin-pass.component.css']
})
export class ForgotAdminPassComponent implements OnInit {

  adminObj: Admin = new Admin();

  constructor() { }

  process()
  {
    alert('Password reset instructions sent to: '+this.adminObj.email)
  }

  ngOnInit(): void {
  }

}
