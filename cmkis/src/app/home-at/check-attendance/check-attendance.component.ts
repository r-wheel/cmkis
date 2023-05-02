import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, timer } from 'rxjs';
import { Location } from '@angular/common';


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
    'action',
  ];

  dataSourceAM: any;
  dataSourcePM: any;
  dataSourceActive: any;

  auth:any;

  constructor(private router: Router, private httpClient: HttpClient, private location: Location) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "AttendanceChecker") {
    //   window.alert("You are not authorized to this page")
    //   this.location.back();
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


  toDisplay(data){;
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

    // GET AM
    let amSched = allMonday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;

    // GET PM
    let pmSched = allMonday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour >= 12;
    });
    this.dataSourcePM = pmSched;

    // GET ACTIVE
    let date: Date = new Date();
    let timeOptions = {hour12: false};
    let time = date.toLocaleTimeString('en-US', timeOptions);
    let activeSched = allMonday.filter(emp => {
      return (emp.time_start <= time && emp.time_end >= time);
    });
    this.dataSourceActive = activeSched;

  }



  getAllTuesday(data){
    const allTuesday = data.filter(obj => obj.day === 'Tuesday');

    // GET AM
    let amSched = allTuesday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;

    // GET PM
    let pmSched = allTuesday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour >= 12;
    });
    this.dataSourcePM = pmSched;

    // GET ACTIVE
    let date: Date = new Date();
    let timeOptions = {hour12: false};
    let time = date.toLocaleTimeString('en-US', timeOptions);
    let activeSched = allTuesday.filter(emp => {
      return (emp.time_start <= time && emp.time_end >= time);
    });
    this.dataSourceActive = activeSched;
  }



  getAllWednesday(data){
    const allWednesday = data.filter(obj => obj.day === 'Wednesday');

    // GET AM
    let amSched = allWednesday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;

    // GET PM
    let pmSched = allWednesday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour >= 12;
    });
    this.dataSourcePM = pmSched;

    // GET ACTIVE
    let date: Date = new Date();
    let timeOptions = {hour12: false};
    let time = date.toLocaleTimeString('en-US', timeOptions);
    let activeSched = allWednesday.filter(emp => {
      return (emp.time_start <= time && emp.time_end >= time);
    });
    console.log(activeSched);
    this.dataSourceActive = activeSched;
  }



  getAllThursday(data){
    const allThursday = data.filter(obj => obj.day === 'Thursday');

    // GET AM
    let amSched = allThursday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;

    // GET PM
    let pmSched = allThursday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour >= 12;
    });
    this.dataSourcePM = pmSched;

    // GET ACTIVE
    let date: Date = new Date();
    let timeOptions = {hour12: false};
    let time = date.toLocaleTimeString('en-US', timeOptions);
    let activeSched = allThursday.filter(emp => {
      return (emp.time_start <= time && emp.time_end >= time);
    });
    this.dataSourceActive = activeSched;
  }



  getAllFriday(data){
    const allFriday = data.filter(obj => obj.day === 'Friday');

    // GET AM
    let amSched = allFriday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;

    // GET PM
    let pmSched = allFriday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour >= 12;
    });
    this.dataSourcePM = pmSched;

    // GET ACTIVE
    let date: Date = new Date();
    let timeOptions = {hour12: false};
    let time = date.toLocaleTimeString('en-US', timeOptions);
    let activeSched = allFriday.filter(emp => {
      return (emp.time_start <= time && emp.time_end >= time);
    });
    this.dataSourceActive = activeSched;
  }



  getAllSaturday(data){
    const allSaturday = data.filter(obj => obj.day === 'Saturday');

    // GET AM
    let amSched = allSaturday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour < 12;
    });
    this.dataSourceAM = amSched;

    // GET PM
    let pmSched = allSaturday.filter(faculty => {
      const hour = parseInt(faculty.time_start.split(":")[0]);
      return hour >= 12;
    });
    this.dataSourcePM = pmSched;

    // GET ACTIVE
    let date: Date = new Date();
    let timeOptions = {hour12: false};
    let time = date.toLocaleTimeString('en-US', timeOptions);
    let activeSched = allSaturday.filter(emp => {
      return (emp.time_start <= time && emp.time_end >= time);
    });
    this.dataSourceActive = activeSched;
  }


}
