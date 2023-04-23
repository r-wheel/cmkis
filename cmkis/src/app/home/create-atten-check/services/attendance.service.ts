import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {


  constructor(private _hTtP: HttpClient) { }

    addAttendance(data:any):Observable<any>{
      return this._hTtP.post('http://localhost/api/checker_create.php',data);
      }

    getAttendanceList():Observable<any>{
      return this._hTtP.get('http://localhost/api/checker_view.php').pipe(map(data => data));
      }

      updateAttendance(id:number, data: any): Observable<any>{
        return this._hTtP.post('http://localhost/api/checker_update.php?id='+ id, data)
      }

      deleteAttendance(id:number): Observable<any>{
        return this._hTtP.get('http://localhost/api/checker_delete.php?id='+ id);
      }
}
