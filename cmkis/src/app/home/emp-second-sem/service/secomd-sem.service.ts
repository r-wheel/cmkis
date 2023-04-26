import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecomdSemService {

  constructor(private _http: HttpClient) {}

  addSecondSem(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/secondSem', data);
  }

  updateSecondSem(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/secondSem/${id}`, data);
  }

  getSecondSemList(): Observable<any> {
    return this._http.get('http://localhost:3000/secondSem');
  }

  deleteSecondSem(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/secondSem/${id}`);
  }
}
