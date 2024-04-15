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

  updatedetails(id:number, acd: JSON)
  {
    return this._http.put(`https://jsonplaceholder.typicode.com/posts/${id}`,acd)
  }

  deletedetails(id:number)
  {
    return this._http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }


  patchdetails(id:number, asd:any)
  {
    return this._http.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,asd)
  }

}
