import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-key-inventory',
  templateUrl: './key-inventory.component.html',
  styleUrls: ['./key-inventory.component.scss']
})
export class KeyInventoryComponent implements OnInit {

  auth:any;
  roomlist:any;

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
