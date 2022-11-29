import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  postRestaurent(data: any) {
    return this._http.post(`${environment.apiUrl}/posts`, data).pipe(map((res:any) => {
    return res;
  }
    ))
  }
  getRestaurent(data: any) {
    return this._http.get<any>(`${environment.apiUrl}/posts/`, data).pipe(map((res:any) => {
    return res;
  }
    ))
  }
  updateRestaurent(data: any, id:number) {
    return this._http.put<any>(`${environment.apiUrl}/posts/`+id, data).pipe(map((res:any) => {
    return res;
  }
    ))
  }
  deleteRestaurent(id:number) {
    return this._http.delete<any>(`${environment.apiUrl}/posts/`+id).pipe(map((res:any) => {
    return res;
  }
    ))
  }
}
