import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

export class academicYear {
  acad_id: number;
  academicYear: string;
}

@Component({
  selector: 'app-semester-management',
  templateUrl: './semester-management.component.html',
  styleUrls: ['./semester-management.component.scss']
})
export class SemesterManagementComponent implements OnInit {

  auth:any;
  acadYear:any;
  selected = "2022-2023";

  errormsg:any;
  successmsg:any;
  academic: academicYear = new academicYear ();
  acadyearForm: FormGroup;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }


    this.api.getAcadYear().subscribe((data:any) => {
      this.acadYear=data;
    })

  }

}
