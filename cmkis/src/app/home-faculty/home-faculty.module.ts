import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFacultyComponent } from './home-faculty.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';



@NgModule({
  declarations: [
    HomeFacultyComponent,
    ViewAttendanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeFacultyModule { }
