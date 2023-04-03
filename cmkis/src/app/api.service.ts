import { Injectable, Output, EventEmitter, } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './user-auth/users';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl!: string;
  baseURL: string = 'http://localhost/cmkis/';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }


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
