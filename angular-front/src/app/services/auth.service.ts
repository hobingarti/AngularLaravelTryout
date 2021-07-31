import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// creating user interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    const url = `${this.apiUrl}/auth/register`;
    return this.http.post(url, user);
  }

  signin(user: User): Observable<any> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post(url, user);
  }

  profileUser(): Observable<any> {
    const url = `${this.apiUrl}/auth/me`;
    return this.http.get(url);
  }
}
