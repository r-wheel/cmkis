import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavAtComponent } from './sidenav-at/sidenav-at.component';
import { SidenavFacultyComponent } from './sidenav-faculty/sidenav-faculty.component';



@NgModule({
  declarations: [
    SidenavComponent,
    SidenavAtComponent,
    SidenavFacultyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    SidenavComponent,
    SidenavAtComponent,
    SidenavFacultyComponent

  ]
})
export class SharedModule { }
