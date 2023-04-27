import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { KeyManagementService } from '../emp-keymanagement/service/key-management.service';
import { CoreService } from 'src/app/core1/core.service';
import { EmpKeymanagementComponent } from '../emp-keymanagement/emp-keymanagement.component';

@Component({
  selector: 'app-room-key-management',
  templateUrl: './room-key-management.component.html',
  styleUrls: ['./room-key-management.component.scss']
})
export class RoomKeyManagementComponent implements OnInit {

  auth:any;
  displayedColumns: string[] = [
    'roomName',
    'action',

  ];


  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dIaLoG:MatDialog,
    private _KeymanagentService:KeyManagementService,
    private _coreServices:CoreService,
    private router: Router,
    )  { }

    createKeymanagementForm(){
      const dialref =  this._dIaLoG.open(EmpKeymanagementComponent)
      dialref.afterClosed().subscribe({
       next: (val) => {
         if (val) {
           this.getKeymanagementList();
         }
       }
      })
     }

     openCreateForm(data:any){
       const dialref = this._dIaLoG.open(EmpKeymanagementComponent,{
         data,
       });

       dialref.afterClosed().subscribe({
         next: (val) => {
         if (val) {
           this.getKeymanagementList();
         }
       }
      })

      }

      getKeymanagementList(){
       this._KeymanagentService.getKeymanagementList().subscribe({
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

       deleteKeymanagement(id: number){
         this._KeymanagentService.deleteKeymanagement(id).subscribe({
           next: (res) => {
             this._coreServices.openSnackBar("Attedance Checker deleted successfully!", 'Done')
             this.getKeymanagementList()
           },
           error: console.log,
         })
       }



  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page, You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }

    this.getKeymanagementList()

  }

}
