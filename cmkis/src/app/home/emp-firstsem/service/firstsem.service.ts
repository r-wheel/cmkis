import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstsemService {

  constructor(private _http: HttpClient) {}

  addfirstSem(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/firstSem', data);
  }

  updatefirstSem(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/firstSem/${id}`, data);
  }

  getfirstSemList(id: number): Observable<any> {
    return this._http.get('http://localhost/api/schedule_view_all-byid.php?id=' + id);
  }

  deletefirstSem(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/firstSem/${id}`);
  }
}
