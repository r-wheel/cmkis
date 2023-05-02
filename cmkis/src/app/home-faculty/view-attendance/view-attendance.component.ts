import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent implements OnInit {

  userId: number = null;

  displayedColumns: string [] = ['date', 'room', 'status'];
  dataSource:any;

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

    this.userId = parseInt(localStorage.getItem("id"));
      this.api.getAttendance(this.userId).subscribe((data:any) => {
        this.dataSource=data;
      })

  }

}
