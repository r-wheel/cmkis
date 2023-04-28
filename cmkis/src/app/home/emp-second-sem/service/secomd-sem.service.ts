import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecomdSemService {

  constructor(private _http: HttpClient) {}

  addSecondSem(id: number, data: any): Observable<any> {
    return this._http.post(`http://localhost/api/schedule_create-byid1.php?id=` + id, data);
  }

  updateSecondSem(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost/api/schedule_update-byid1.php?id=` + id, data);
  }

  getSecondSemList(id: number): Observable<any> {
    return this._http.get('http://localhost/api/schedule_view_all-byid1.php?id=' + id);
  }

  deleteSecondSem(id: number): Observable<any> {
    return this._http.get('http://localhost/api/schedule_delete-byid1.php?id='+ id);
  }
}
