import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Location } from '@angular/common';

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
  selectedAcadYear = "";
  selectedSemester = "";

  errormsg:any;
  successmsg:any;
  academic: academicYear = new academicYear ();
  acadyearForm: FormGroup;

  constructor(private router: Router,
              private api: ApiService,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }

    this.acadyearForm = this.fb.group({
      acad_id: [''],
      academicYear: [''],

    });


    this.api.getAcadYear().subscribe((data:any) => {
      this.acadYear=data;
    })

  }

  onFormSubmit() {
    if (!this.acadyearForm.valid) {
      return;
    }
    if(this.acadyearForm.valid){
      this.api.addAcadYear(this.acadyearForm.value).subscribe((res)=>{
        console.log(res, 'data submitted');
        this.acadyearForm.reset();
        this.successmsg = res.message;
      });
    } else {
      this.errormsg ="All field required.";
    }
  }

}
