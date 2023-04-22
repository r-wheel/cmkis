import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {


  constructor(private _hTtP: HttpClient) { }

  addAttendance(data:any):Observable<any>{
    return this._hTtP.post('http://localhost:3000/attendance',data);
    }

    getAttendanceList():Observable<any>{
      return this._hTtP.get('http://localhost:3000/attendance');
      }

      updateAttendance(id:number, data: any): Observable<any>{
        return this._hTtP.put(`http://localhost:3000/attendance/${id}`,data)
      }
  
      deleteAttendance(id:number): Observable<any>{
        return this._hTtP.delete(`http://localhost:3000/attendance/${id}`)
      }
}
