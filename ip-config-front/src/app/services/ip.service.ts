import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Ip } from '../Ip';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private findId!: number;
  private apiUrl = 'http://localhost:5000/ips';
  private subjectIp = new Subject<any>();

  constructor(private http:HttpClient) { }

  getIps(): Observable<Ip[]> {
    return this.http.get<Ip[]>(this.apiUrl);
  }

  addIp(ip: Ip): Observable<Ip> {
    return this.http.post<Ip>(this.apiUrl, ip, httpOptions);
  }

  editIp(id: number): Observable<Ip> {
    this.findId = id;

    const url = `${this.apiUrl}/${this.findId}`;
    return this.http.get<Ip>(url)
  }
  
  updateIp(ip: Ip): Observable<Ip> {
    const url = `${this.apiUrl}/${ip.id}`;
    return this.http.put<Ip>(url, ip, httpOptions);
  }
}
