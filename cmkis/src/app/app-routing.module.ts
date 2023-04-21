import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user-auth/login/login.component';
import { LoginFacultyComponent } from './user-auth/login-faculty/login-faculty.component';
import { LoginAtndcChkrComponent } from './user-auth/login-atndc-chkr/login-atndc-chkr.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './user-auth/auth.guard';


import { CmkisComponent } from './cmkis/cmkis.component';
import { AccountComponent } from './home/account/account.component';
import { AttendanceCheckerComponent } from './home/attendance-checker/attendance-checker.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FacultyComponent } from './home/faculty/faculty.component';
import { KeyInventoryComponent } from './home/key-inventory/key-inventory.component';
import { RoomKeyManagementComponent } from './home/room-key-management/room-key-management.component';
import { SemesterManagementComponent } from './home/semester-management/semester-management.component';
import { SettingsComponent } from './home/settings/settings.component';
import { FacultyProfileComponent } from './home/faculty-profile/faculty-profile.component';


import { HomeATComponent } from './home-at/home-at.component';
import { HomeFacultyComponent } from './home-faculty/home-faculty.component';
import { RoleGuard } from './user-auth/role.guard';


const routes: Routes = [

  { path: '', redirectTo: 'cmkis', pathMatch: 'full' },
  { path: 'cmkis', component: CmkisComponent },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'account', component: AccountComponent},
      {path: 'attendance-checker', component: AttendanceCheckerComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'faculty', component: FacultyComponent},
      {path: 'faculty/:id', component: FacultyProfileComponent },
      {path: 'key-inventory', component: KeyInventoryComponent},
      {path: 'room-key-management', component: RoomKeyManagementComponent},
      {path: 'semester-management', component: SemesterManagementComponent},
      {path: 'settings', component: SettingsComponent},
    ],

  },

  { path: 'login-attendance-checker', component: LoginAtndcChkrComponent },
  { path: 'home-attendance-checker', component: HomeATComponent },

  { path: 'login-faculty', component: LoginFacultyComponent },
  { path: 'home-faculty', component: HomeFacultyComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
