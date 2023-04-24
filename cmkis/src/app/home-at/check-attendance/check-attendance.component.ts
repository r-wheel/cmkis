import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, timer } from 'rxjs';


@Component({
  selector: 'app-check-attendance',
  templateUrl: './check-attendance.component.html',
  styleUrls: ['./check-attendance.component.scss']
})
export class CheckAttendanceComponent implements OnInit {

  dateDisplay:Date;
  timeDisplay:Date;

  displayColumns: string[] = [
    'room',
    'faculty',
    'coursecode',
    'subject',
    'section',
    'day',
    'time_start',
    'time_end',
  ];

  dataSource: any = [];

  auth:any;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "AttendanceChecker") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }



    timer(0,1000).subscribe(()=>{
      this.dateDisplay = new Date ()
      this.timeDisplay = new Date ()
      this.getAllSched();
    })

  }

  getAllSched(){
    return this.httpClient.get('http://localhost/api/schedule_view.php').subscribe((data => {
      this.dataSource = data;
    }));

  }
}
