import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstsemService {

  constructor(private _http: HttpClient) {}

  addfirstSem(id: number, data: any): Observable<any> {
    return this._http.post(`http://localhost/api/schedule_create-byid.php?id=` + id, data);
  }

  updatefirstSem(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost/api/schedule_update-byid.php?id=` + id, data);
  }

  getfirstSemList(id: number): Observable<any> {
    return this._http.get('http://localhost/api/schedule_view_all-byid.php?id=' + id);
  }

  deletefirstSem(id: number): Observable<any> {
    return this._http.get('http://localhost/api/schedule_delete-byid.php?id='+ id);
  }
}
