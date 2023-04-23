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
  baseURL: string = 'http://localhost/cmkis/';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }



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
    return this.httpClient.get<any>(this.baseURL + 'api.php?id='+ id).pipe(
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
