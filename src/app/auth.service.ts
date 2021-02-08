import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserData: any = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient ,private _Router:Router) {

    if(localStorage.getItem("currentUser")){

      this.saveCurrentUser();
      
    }
   }

  logout()
  {
    this.currentUserData.next(null);
    localStorage.removeItem("currentUser");
    this._Router.navigate(['/login']);
  }



  regform(formData: any): Observable<any> {
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`, formData);
  }

  loginform(formData: any): Observable<any> {
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`, formData);
  }

  saveCurrentUser() {

    let userToken: any = localStorage.getItem("currentUser");
    let userDecoded = jwtDecode(userToken);
    this.currentUserData.next(userDecoded);


  }
}
