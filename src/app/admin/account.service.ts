import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  register(signInForm: any) {
    return this.http.post("https://localhost:7210/Account/Register", signInForm);
  }
  login(loginForm: any) {
    return this.http.post("https://localhost:7210/Account/Login", loginForm)
  }
}
