import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-faculty',
  templateUrl: './home-faculty.component.html',
  styleUrls: ['./home-faculty.component.scss']
})
export class HomeFacultyComponent implements OnInit {

  userId: number = null;

  auth:any;

  constructor(private router: Router,
              private api: ApiService,
              private location: Location) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Faculty") {
    //   window.alert("You are not authorized to this page")
    //   this.location.back();
    // }

  }

}
