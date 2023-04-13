import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Users } from 'src/app/user-auth/users';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss']
})
export class FacultyProfileComponent implements OnInit, OnDestroy {

  userId: number = null;
  private sub: Subscription;
  user: Users = null;

  public displayColumn: string [] = ['id', 'fname', 'lname', 'email', 'pass'];
  public dataSource: any = [];

  allFaculty: any = [];
  allFacultySubscribe: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = parseInt(params['id']);
      this.api.findOne(this.userId).pipe(
        map((user:Users) => this.user = user)
      ).subscribe()
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
