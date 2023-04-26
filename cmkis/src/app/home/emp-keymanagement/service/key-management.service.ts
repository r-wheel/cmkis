import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KeyManagementService {

  constructor(private _http: HttpClient) {}

  addKeymanagement(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/keyRoom', data);
  }

  updateKeymanagement(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/keyRoom/${id}`, data);
  }

  getKeymanagementList(): Observable<any> {
    return this._http.get('http://localhost:3000/keyRoom');
  }

  deleteKeymanagement(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/keyRoom/${id}`);
  }
}
