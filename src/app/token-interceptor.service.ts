// import { Injectable, Injector } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
// import { Observable } from 'rxjs';
// import {LoginComponent} from '../app/login/login.component';;

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor {

//   constructor(private injector: Injector)  {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     let authService = this.injector.get(LoginComponent)
//     let tokenRequest = req.clone({
//       setHeaders: {
//       // Authrization: `Bearer ${LoginComponent.getToken()}`
//       }
//     })
//     return next.handle(tokenRequest);
//   }  
// }
