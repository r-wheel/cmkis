import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  auth: any;

  highcharts = Highcharts;
   chartOptions = {
      chart: {
         type: 'bar'
      },
      title: {
         text: 'Historic World Population by Region'
      },
      subtitle : {
         text: 'Source: Wikipedia.org'
      },
      legend : {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: 250,
         y: 100,
         floating: true,
         borderWidth: 1,

         backgroundColor: (
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
              '#FFFFFF'), shadow: true
         },
         xAxis:{
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
            text: null
         }
      },
      yAxis : {
         min: 0, title: {
            text: 'Population (millions)', align: 'high'
         },
         labels: {
            overflow: 'justify'
         }
      },
      tooltip : {
         valueSuffix: ' millions'
      },
      plotOptions : {
         bar: {
            dataLabels: {
               enabled: true
            }
         }
      },
      credits:{
         enabled: false
      },
      series: [
         {
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
         },
         {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
         },
         {
            name: 'Year 2008',
            data: [973, 914, 4054, 732, 34]
         }
      ]
   };





  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [10, 2, 3, 6 , 9, 17, 20, 10, 5, 2, 16, 2]
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

  constructor(private router:Router) { }

  ngOnInit(): void {
  //  this.auth = localStorage.getItem('token');
  //   if (this.auth !== "Admin") {
  //     window.alert("You are not authorized to this page. You will be redirected to Login Page")
  //     this.router.navigate(['/cmkis']);
  //   }


  }

}
