import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KeyManagementService {

  constructor(private _http: HttpClient) {}

  addKeymanagement(data: any): Observable<any> {
    return this._http.post('http://localhost/api/rooms_create.php', data);
  }

  updateKeymanagement(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost/api/rooms_update.php?id=` + id, data);
  }

  getKeymanagementList(): Observable<any> {
    return this._http.get('http://localhost/api/rooms_view.php');
  }

  deleteKeymanagement(id: number): Observable<any> {
    return this._http.get('http://localhost/api/rooms_delete.php?id='+ id);
  }
}
