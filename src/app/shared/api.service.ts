import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
   
  getRestaurent(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}/posts/`).pipe(catchError(this.handleError));
  }

  handleError(err: any) {
    if (err instanceof HttpErrorResponse) {
      // server side error
    } else {
      // client side error
    }
    return err;
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
