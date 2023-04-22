<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAttenCheckComponent } from '../create-atten-check/create-atten-check.component';
import { AttendanceService } from '../create-atten-check/services/attendance.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core1/core.service';

=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 979618befc3de966f492fc73b37acb6e08dad831

@Component({
  selector: 'app-attendance-checker',
  templateUrl: './attendance-checker.component.html',
  styleUrls: ['./attendance-checker.component.scss']
})
export class AttendanceCheckerComponent implements OnInit {

<<<<<<< HEAD

  displayedColumns: string[] = [
    'id',
    'firstname',
    'middlename',
    'lastname',
    'email',
    'birthday',
    'contact',
    'gender',
    'action',
  ];


  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dIaLoG:MatDialog,
    private _attendanceService:AttendanceService,
    private _coreServices:CoreService

    )  { }


  createAttendanceForm(){
    const dialref =  this._dIaLoG.open(CreateAttenCheckComponent)
    dialref.afterClosed().subscribe({
     next: (val) => {
       if (val) {
         this.getAttendanceList();
       }
     }
    })
   }
 
   openCreateForm(data:any){
     const dialref = this._dIaLoG.open(CreateAttenCheckComponent,{
       data,
     });
     
     dialref.afterClosed().subscribe({
       next: (val) => {
       if (val) {
         this.getAttendanceList();
       }
     }
    }) 
    
    }

    getAttendanceList(){
     this._attendanceService.getAttendanceList().subscribe({
       next: (res) => {
         this.dataSource = new MatTableDataSource(res);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
       },
       error: console.log,
     })
       
   }
 
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
     deleteAttendance(id: number){
       this._attendanceService.deleteAttendance(id).subscribe({
         next: (res) => {
           this._coreServices.openSnackBar("Faculty deleted successfully!", 'Done')
           this.getAttendanceList()
         },
         error: console.log,
       })
     }
 



  ngOnInit(): void {
    this.getAttendanceList()
=======
  auth:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }

>>>>>>> 979618befc3de966f492fc73b37acb6e08dad831
  }

}
