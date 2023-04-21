import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-key-management',
  templateUrl: './room-key-management.component.html',
  styleUrls: ['./room-key-management.component.scss']
})
export class RoomKeyManagementComponent implements OnInit {

  auth:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.auth = localStorage.getItem('token');
    if (this.auth !== "Admin") {
      window.alert("You are not authorized to this page, You will be redirected to Login Page")
      this.router.navigate(['/cmkis']);
    }


  }

}
