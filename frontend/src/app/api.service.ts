import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //use this http client so that we can use post request below
  constructor(private http: HttpClient) { }

  //post it on 3000
  registerUser(user) {
    this.http.post('http://localhost:3000/register', user).subscribe(res => {
      console.log(res);
    })
  }

    //get it from 3000
    loginUser(user) {
      this.http.get('http://localhost:3000/register', user).subscribe(res => {
        console.log(res);
      })
    }
}
