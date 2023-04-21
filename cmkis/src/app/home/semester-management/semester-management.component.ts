import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semester-management',
  templateUrl: './semester-management.component.html',
  styleUrls: ['./semester-management.component.scss']
})
export class SemesterManagementComponent implements OnInit {

  auth:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.auth = localStorage.getItem('token');
    if (this.auth !== "Admin") {
      window.alert("You are not authorized to this page. You will be redirected to Login Page")
      this.router.navigate(['/cmkis']);
    }

  }

}
