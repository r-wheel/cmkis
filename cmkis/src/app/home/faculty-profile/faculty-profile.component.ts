import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Users } from 'src/app/user-auth/users';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  public displayColumnAttendance: string [] = ['id', 'fname', 'lname'];
  public dataSource: any = [];

  allFaculty: any = [];
  allFacultySubscribe: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    // this.auth = localStorage.getItem('token');
    // if (this.auth !== "Admin") {
    //   window.alert("You are not authorized to this page. You will be redirected to Login Page")
    //   this.router.navigate(['/cmkis']);
    // }

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = parseInt(params['id']);
      this.api.findOne(this.userId).pipe(
        map((user:Users) => this.user = user)
      ).subscribe()
      console.log(this.user);
    });


    this.getAllFaculty();

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  getAllFaculty(){
    this.allFacultySubscribe = this.api.loadAllFaculty().subscribe(data =>{
      this.allFaculty = data;
      console.table(data);
      this.dataSource = data;
    })
  }

}
