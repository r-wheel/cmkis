import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFacultyComponent } from './home-faculty.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeFacultyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeFacultyModule { }
