
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { FacultyyService } from '../emp-add-edit/services/facultyy.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreService } from 'src/app/core1/core.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  auth:any;

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
    private _dailog: MatDialog ,
    private _facultyService:FacultyyService,
    private _coreService: CoreService,private router: Router
    ){}

  openAddEditEmpForm(){
   const dialogRef =  this._dailog.open(EmpAddEditComponent)
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getFacultyList();
      }
    }
   })
  }

  openEditForm(data:any){
    const dialogRef = this._dailog.open(EmpAddEditComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
      if (val) {
        this.getFacultyList();
      }
    }
   })


   }



  getFacultyList(){
    this._facultyService.getFacultyList().subscribe({
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

    deleteFaculty(id: number){
      this._facultyService.deleteFaculty(id).subscribe({
        next: (res) => {
          this.getFacultyList(),
          this._coreService.openSnackBar("Faculty deleted successfully!", 'Done')

        },
        error: console.log,
      })
    }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }
    this.getFacultyList()
  }



}
