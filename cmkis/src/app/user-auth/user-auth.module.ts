import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginFacultyComponent } from './login-faculty/login-faculty.component';
import { LoginAtndcChkrComponent } from './login-atndc-chkr/login-atndc-chkr.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFacultyComponent,
    LoginAtndcChkrComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserAuthModule { }
