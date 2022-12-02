import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentdashComponent } from './restaurentdash/restaurentdash.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import {TokenInterceptorService} from '../../src/app/token-interceptor.service';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentdashComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    NotifierModule
  ],
  // providers: [{
    // provide: HTTP_INTERCEPTORS,
    // useClass: TokenInterceptorService,
    // multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
