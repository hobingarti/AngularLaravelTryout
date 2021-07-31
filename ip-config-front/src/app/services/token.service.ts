import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private apiUrl = 'http://localhost:8000/api';

  private issuer = {
    login: `${this.apiUrl}/auth/login`,
    register: `${this.apiUrl}/auth/register`
  }

  constructor() { }

  handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isValidToken() {
    const token = this.getToken;

    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
      }
    }

    return false;
  }

  payload(token: any) {
    const jwtpayload = token.split('.')[1];
    return JSON.parse(atob(jwtpayload));
  }

  isLoggedIn() {
    return this.isValidToken();
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
