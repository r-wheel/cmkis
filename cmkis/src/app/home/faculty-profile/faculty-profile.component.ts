import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Users } from 'src/app/user-auth/users';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FirstsemService } from '../emp-firstsem/service/firstsem.service';
import { CoreService } from 'src/app/core1/core.service';
import { EmpFirstsemComponent } from '../emp-firstsem/emp-firstsem.component';
import { EmpSecondSemComponent } from '../emp-second-sem/emp-second-sem.component';
import { SecomdSemService } from '../emp-second-sem/service/secomd-sem.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss']
})
export class FacultyProfileComponent implements OnInit, OnDestroy {

  auth:any;

  userId: number = null;
  private sub: Subscription;
  user: Users = null;

  public displayColumn: string [] = ['id', 'fname', 'lname', 'email', 'pass'];
  public displayColumnAttendance: string [] = ['date', 'room', 'status'];


  allFaculty: any = [];
  allFacultySubscribe: any;

  displayedColumns: string[] = [
    'coursecode',
    'subject',
    'section',
    'day',
    'time_start',
    'time_end',
    'room',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayColumns: string[] = [
    'courseCode2',
    'subject2',
    'room2',
    'day2',
    'section2',
    'timeStart2',
    'timeEnd2',
    'action2',
  ];

  dataSource2!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  @ViewChild(MatSort) sort2!: MatSort;


  @ViewChild(MatPaginator) paginator3!: MatPaginator;
  @ViewChild(MatSort) sort3!: MatSort;

  displayColumns3: string[] = [
    'date',
    'room',
    'status',
  ];

  dataSource3!: MatTableDataSource<any>;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private dialog: MatDialog,
    private FirstsemService: FirstsemService,
    private SecondsemService: SecomdSemService ,
    private coreService: CoreService,
    private location: Location
  ) { }

  openfirstSemForm() {
    const dialogRef = this.dialog.open(EmpFirstsemComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getfirstSemList();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EmpFirstsemComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getfirstSemList();
        }
      },
    });
  }

  getfirstSemList() {
      this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = parseInt(params['id']);
      this.FirstsemService.getfirstSemList(this.userId).subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      })
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletefirstSem(id: number) {
    this.FirstsemService.deletefirstSem(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('Employee deleted!', 'done');
        this.getfirstSemList();
      },
      error: console.log,
    });
  }



// second sem

openfirstSemForm2() {
  const dialogRef = this.dialog.open(EmpSecondSemComponent);
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getfirstSemList2();
      }
    },
  });
}

getfirstSemList2() {
  this.sub = this.activatedRoute.params.subscribe(params => {
  this.userId = parseInt(params['id']);
  this.SecondsemService.getSecondSemList(this.userId).subscribe({
    next: (res) => {
      this.dataSource2 = new MatTableDataSource(res);
      this.dataSource2.sort = this.sort;
      this.dataSource2.paginator = this.paginator;
    },
    error: console.log,
  })
});
}

applyFilter2(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource2.filter = filterValue.trim().toLowerCase();

  if (this.dataSource2.paginator) {
    this.dataSource2.paginator.firstPage();
  }
}

deletefirstSem2(id: number) {
  this.SecondsemService.deleteSecondSem(id).subscribe({
    next: (res) => {
      this.coreService.openSnackBar('Employee deleted!', 'done');
      this.getfirstSemList2();
    },
    error: console.log,
  });
}

openEditForm2(data: any) {
  const dialogRef = this.dialog.open(EmpSecondSemComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getfirstSemList2();
      }
    },
  });
}





  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page")
    //   this.location.back();
    // }

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = parseInt(params['id']);
      localStorage.setItem('faculty-id', this.userId.toString());
      this.api.findOne(this.userId).pipe(
        map((user:Users) => this.user = user)
      ).subscribe()
    });


    this.getfirstSemList();
    this.getfirstSemList2();


    this.loadAttendance();


  }

  loadAttendance(){
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = parseInt(params['id']);
      this.FirstsemService.getAttendance(this.userId).subscribe({
        next: (res) => {
          this.dataSource3 = new MatTableDataSource(res);
          this.dataSource3.sort = this.sort3;
          this.dataSource3.paginator = this.paginator3;
        },
        error: console.log,
      })
    });
  }



  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
