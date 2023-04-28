import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
import {MatSort, Sort} from '@angular/material/sort';
import { ApiService } from 'src/app/api.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface PeriodicElement {
  roomName: string;
  availabilty: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['RoomName', 'Availability'];
  // dataSource = ELEMENT_DATA;
  dataSource:any;

  auth: any;

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Faculty Attendance'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Faculty AM',
        data: [10, 2, 3, 6 , 9, 17, 20, 10, 5, 2, 16, 2]
      } as any,
      {
        name: 'Faculty PM',
        data: [1, 10, 9, 3 , 1, 9, 10, 15, 19, 20, 8, 2]
      } as any
    ]
  });

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Volume of Faculty per Day',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'Monday', y: 7, color: '#33FF8A' },
          { name: 'Tuesday', y: 6, color: '#393e46' },
          { name: 'Wednesday', y: 4, color: '#00adb5' },
          { name: 'Thursday', y: 3, color: '#FF336E' },
          { name: 'Friday', y: 5, color: '#506ef9' },
          { name: 'Saturday', y: 2, color: '#FF5733' },
          { name: 'Sunday', y: 1, color: '#33E9FF' },
        ],
      },
    ],
  });

  constructor(private router:Router,
              private api: ApiService,
              private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: MatSort;



  ngOnInit(): void {
  //  this.auth = localStorage.getItem('token');
  //   if (this.auth !== "Admin") {
  //     window.alert("You are not authorized to this page. You will be redirected to Login Page")
  //     this.router.navigate(['/cmkis']);
  //   }
    this.api.getAllRoom().subscribe((data:any) => {
      this.dataSource=data;
      this.dataSource.sort = this.sort;
    })
  }


}
