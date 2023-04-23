import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyyService {

  constructor(private _http: HttpClient) { }

    addFaculty(data:any):Observable<any>{
      return this._http.post('http://localhost/api/faculty_create.php',data);
    }

    getFacultyList():Observable<any>{
      return this._http.get('http://localhost/api/faculty_view.php').pipe(map(data => data));
    }

    updateFaculty(id:number, data: any): Observable<any>{
      return this._http.post('http://localhost/api/faculty_update.php?id='+ id, data);
    }

    deleteFaculty(id:number): Observable<any>{
      return this._http.get('http://localhost/api/faculty_delete.php?id='+ id);
    }
}
