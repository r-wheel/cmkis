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
  data:any;

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

  dataSourceAM: any;
  dataSourcePM: any;

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
      // this.getAllSched();
    })

    this.getAllSched();

  }


  getAllSched(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('http://localhost/api/schedule_view.php').subscribe(
        (data) => {
          resolve(
            this.toDisplay(data)
            );},
        (error) => {
          reject(error);
        }
      );
    });
  }


  toDisplay(data){
    console.log(data);
    if (this.toDay() === 'Monday'){
      this.getAllMonday(data);
    }
    else if (this.toDay() === 'Tuesday') {
      this.getAllTuesday(data);
    }
    else if (this.toDay() === 'Wednesday') {
      this.getAllWednesday(data);
    }
    else if (this.toDay() === 'Thursday') {
      this.getAllThursday(data);
    }
    else if (this.toDay() === 'Friday') {
      this.getAllFriday(data);
    }
    else if (this.toDay() === 'Saturday') {
      this.getAllSaturday(data);
    }
  }


  toDay(){
    const today = new Date();
    const dayOfWeek = today.getDay();
    const toDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek]
    return toDay;
  }


  getAllMonday(data){
    const allMonday = data.filter(obj => obj.day === 'Monday');
    this.dataSourceAM = allMonday;
  }

  getAllTuesday(data){
    const allTuesday = data.filter(obj => obj.day === 'Tuesday');
    let amSched = allTuesday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;;

  }

  getAllWednesday(data){
    const allWednesday = data.filter(obj => obj.day === 'Wednesday');
    let amSched = allWednesday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;
    let pmSched = allWednesday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour >= 12;
    });
    this.dataSourcePM = pmSched;
  }

  getAllThursday(data){
    const allThursday = data.filter(obj => obj.day === 'Thursday');
    let amSched = allThursday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;
  }

  getAllFriday(data){
    const allFriday = data.filter(obj => obj.day === 'Friday');
    let amSched = allFriday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;
  }

  getAllSaturday(data){
    const allSaturday = data.filter(obj => obj.day === 'Saturday');
    let amSched = allSaturday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;
  }


}
