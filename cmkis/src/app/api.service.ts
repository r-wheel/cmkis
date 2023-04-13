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


  
  findOne(id: number): Observable<Users> {
    return this.httpClient.get<any>(this.baseURL + 'api.php?id='+ id).pipe(
      map((user:Users) => user)
    )
  }


  public userlogin(email:any,pass:any) {
    return this.httpClient.post<any>(this.baseURL + '/login.php', {email,pass})
    .pipe(map(Users=>{
      this.setToken(Users.email);
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

}
