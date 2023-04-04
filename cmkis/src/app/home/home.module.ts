import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { AccountComponent } from './account/account.component';
import { AttendanceCheckerComponent } from './attendance-checker/attendance-checker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { KeyInventoryComponent } from './key-inventory/key-inventory.component';
import { RoomKeyManagementComponent } from './room-key-management/room-key-management.component';
import { SemesterManagementComponent } from './semester-management/semester-management.component';
import { SettingsComponent } from './settings/settings.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        HomeComponent,
        AccountComponent,
        AttendanceCheckerComponent,
        DashboardComponent,
        FacultyComponent,
        KeyInventoryComponent,
        RoomKeyManagementComponent,
        SemesterManagementComponent,
        SettingsComponent
    ],
    exports: [
        DashboardComponent
    ],
    providers: [],
    bootstrap: [HomeComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        RouterModule,
        SharedModule
    ]
})
export class HomeModule { }
