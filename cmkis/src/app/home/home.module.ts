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
// Faculty-import
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// Attendance-Checker-import
import { CreateAttenCheckComponent } from './create-atten-check/create-atten-check.component';






@NgModule({
    declarations: [
        HomeComponent,
        AccountComponent,
        AttendanceCheckerComponent,
        DashboardComponent,
        KeyInventoryComponent,
        RoomKeyManagementComponent,
        SemesterManagementComponent,
        SettingsComponent,
        FacultyComponent,
        EmpAddEditComponent,
        CreateAttenCheckComponent,
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
        SharedModule,
        MatToolbarModule,
        MatDialogModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule

    ]
})
export class HomeModule { }
