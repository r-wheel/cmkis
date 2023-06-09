import { Injectable, Output, EventEmitter, } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Users } from './user-auth/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl!: string;
  baseURL: string = 'http://localhost/api/';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  getAttendance(id: number): Observable<any> {
    return this.httpClient.get('http://localhost/api/getAllAttendance.php?id=' + id);
  }

  // GET ALL SCHEDULE HERE
  getAllSched(){
    return this.httpClient.get(this.baseURL + 'schedule_view.php').pipe(map(data => data));
  }
  // GET ALL SCHEDULE END


  // GET ALL ROOM HERE
  getAllRoom(){
    return this.httpClient.get(this.baseURL + 'rooms_view.php').pipe(map(data => data));
  }
  // GET ALL ROOM END


  addAcadYear(data:any): Observable<any>{
    return this.httpClient.post(this.baseURL + 'acadYear_add.php', data);
  }


  // GET ALL ACADYEAR HERE
  getAcadYear(){
    return this.httpClient.get(this.baseURL + 'acadYear_view.php').pipe(map(data => data));
  }
  // GET ALL ACADYEAR END



  // GET SEMESTER
  getSemester(id: number): Observable<Users> {
    return this.httpClient.get<any>(this.baseURL + 'api.php?id='+ id).pipe(
      map((user:Users) => user)
    )
  }
  // GET SEMESTER END

  // GET ALL FACULTY HERE
  loadAllFaculty(){
    return this.httpClient.get(this.baseURL + 'api2.php').pipe(map(data => data));
  }
  // GET ALL FACULTY END



  // GET FACULTY BY ID HERE
  findOne(id: number): Observable<Users> {
    return this.httpClient.get<any>(this.baseURL + 'view_one.php?id='+ id).pipe(
      map((user:Users) => user)
    )
  }
  // GET FACULTY BY ID END



  // LOGIN HERE
  public adminLogin(username:any,pass:any) {
    return this.httpClient.post<any>(this.baseURL + '/loginAdmin.php', {username,pass})
    .pipe(map(Users=>{
      this.setToken(Users.role);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }

  public facultyLogin(username:any,pass:any) {
    return this.httpClient.post<any>(this.baseURL + '/loginFaculty.php', {username,pass})
    .pipe(map(Users=>{
      this.setToken(Users.role);
      localStorage.setItem('id',Users.facultyid)
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }

  public attendanceCheckerLogin(username:any,pass:any) {
    return this.httpClient.post<any>(this.baseURL + '/loginAttendanceChecker.php', {username,pass})
    .pipe(map(Users=>{
      this.setToken(Users.role);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }

  setToken(token: string){
    localStorage.setItem('token',token)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    const usertoken = this.getToken();
    if (usertoken != null){
      return true
    }
      return false;
  }
  // LOGIN END
}
