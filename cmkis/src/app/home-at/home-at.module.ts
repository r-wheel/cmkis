import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeATComponent } from './home-at.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckAttendanceComponent } from './check-attendance/check-attendance.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    HomeATComponent,
    CheckAttendanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class HomeAtModule { }
