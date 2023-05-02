import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home-at',
  templateUrl: './home-at.component.html',
  styleUrls: ['./home-at.component.scss']
})
export class HomeATComponent implements OnInit {

  auth:any;

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "AttendanceChecker") {
    //   window.alert("You are not authorized to this page")
    //   this.location.back();
    // }
  }
}
