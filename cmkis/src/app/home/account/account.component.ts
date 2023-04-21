import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  currentPassword: string;
  newPassword: string;
  confirmPassword: string;

  form: FormGroup;

  auth:any;

  constructor(private router: Router,private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  // constructor(private router: Router,
  //             private formBuilder: FormBuilder,
  //             private apiService: ApiService) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      console.log('New password and confirm password do not match.');
      return;
    }
    const payload = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };
    this.http.post('http://localhost/cmkis/changePassword.php', payload).subscribe(
      response => console.log('Password changed successfully.'),
      error => console.error('Error changing password:', error)
    );
  }





}
