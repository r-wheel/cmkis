import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-faculty',
  templateUrl: './login-faculty.component.html',
  styleUrls: ['./login-faculty.component.scss']
})
export class LoginFacultyComponent implements OnInit {

  angForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(1),Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  postdata(angForm:any){
    this.dataService.facultyLogin(angForm.value.username,angForm.value.password)
    .pipe(first())
    .subscribe(
      data=>{
        console.log(data);
        if(data.message=='success')
        //const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
        this.router.navigate(['./home-faculty/view-attendance']);
      },
      error => {
        alert("User name or password is incorrect")
      }
    )

  }

}
