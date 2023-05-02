import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KeyinventoryService {

  constructor(private _http: HttpClient) {}

  addKeyInventory(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/keyInventory', data);
  }

  updateKeyInventory(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost/api/keyinventory?id=` + id, data);
  }

  getKeyInventoryList(): Observable<any> {
    return this._http.get('http://localhost/api/rooms_view.php').pipe(map(data => data));
  }

  deleteKeyInventory(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/keyInventory/${id}`);
  }

}

