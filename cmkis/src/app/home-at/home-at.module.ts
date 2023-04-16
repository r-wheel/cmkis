import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeATComponent } from './home-at.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeATComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeAtModule { }
