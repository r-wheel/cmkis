import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyyService {

  constructor(private _http: HttpClient) { }

  addFaculty(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/faculty',data);
  }

    getFacultyList():Observable<any>{
      return this._http.get('http://localhost:3000/faculty');
      }

      updateFaculty(id:number, data: any): Observable<any>{
        return this._http.put(`http://localhost:3000/faculty/${id}`,data)
      }

      deleteFaculty(id:number): Observable<any>{
        return this._http.delete(`http://localhost:3000/faculty/${id}`)
      }
}
