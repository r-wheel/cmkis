import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'CICT Class Monitoring and Key Inventory Management System';
  
  constructor() { }

  ngOnInit(): void {
  }

}



