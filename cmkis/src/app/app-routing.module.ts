import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user-auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './user-auth/auth.guard';


import { AccountComponent } from './home/account/account.component';
import { AttendanceCheckerComponent } from './home/attendance-checker/attendance-checker.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FacultyComponent } from './home/faculty/faculty.component';
import { KeyInventoryComponent } from './home/key-inventory/key-inventory.component';
import { RoomKeyManagementComponent } from './home/room-key-management/room-key-management.component';
import { SemesterManagementComponent } from './home/semester-management/semester-management.component';
import { SettingsComponent } from './home/settings/settings.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {path: 'account', component: AccountComponent},
      {path: 'attendance-checker', component: AttendanceCheckerComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'faculty', component: FacultyComponent},
      {path: 'key-inventory', component: KeyInventoryComponent},
      {path: 'room-key-management', component: RoomKeyManagementComponent},
      {path: 'semester-management', component: SemesterManagementComponent},
      {path: 'settings', component: SettingsComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
