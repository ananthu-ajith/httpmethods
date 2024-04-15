import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http:HttpClient) { }

  getdetails()
  {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  senddetails(acd: JSON)
  {
    return this._http.post('https://jsonplaceholder.typicode.com/posts',acd)
  }

}
