import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-key-inventory-at',
  templateUrl: './key-inventory-at.component.html',
  styleUrls: ['./key-inventory-at.component.scss']
})
export class KeyInventoryAtComponent implements OnInit {

  auth:any;
  roomlist:any;
  rooms:any;
  status:any;
  isAvailable:boolean;

  constructor(private router: Router,
              private api: ApiService) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }

    this.api.getAllRoom().subscribe((data:any) => {
      this.roomlist=data;
    })
  }

}
