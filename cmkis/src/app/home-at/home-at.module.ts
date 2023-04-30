import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeATComponent } from './home-at.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckAttendanceComponent } from './check-attendance/check-attendance.component';
import { MatTabsModule } from '@angular/material/tabs';
import { KeyInventoryAtComponent } from './key-inventory-at/key-inventory-at.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    HomeATComponent,
    CheckAttendanceComponent,
    KeyInventoryAtComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class HomeAtModule { }
