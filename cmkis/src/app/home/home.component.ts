import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'CICT Class Monitoring and Key Inventory Management System';

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



