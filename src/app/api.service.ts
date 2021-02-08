import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }

getTrending(media:string):Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/day?api_key=798a18cc8f9ee46ac16a65682cddf263`);
}

getmoviedetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);
  }

}
