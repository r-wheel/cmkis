import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

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
