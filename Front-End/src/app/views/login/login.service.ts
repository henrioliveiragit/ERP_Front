import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  url = "http://127.0.0.1:8000/auth/login/"

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  postLogin(loginData: any) {
    return this.httpClient.post(this.url, loginData, {
      headers: this.headers
    });
  }
}
