import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.tokenService.getToken();
    request = request.clone({
      setHeaders: {
        // Authorization: "Bearer "+"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYyNzcxNDYyMSwiZXhwIjoxNjI3NzE4MjIxLCJuYmYiOjE2Mjc3MTQ2MjEsImp0aSI6Ilhqb25TdEFVWUVWYW1ZWjYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.as6iNPvcEVTR0gh-VFMrs7Xj_KsY752scpXTlD4n0G0"
        Authorization: "Bearer "+accessToken
      }
    });
    
    return next.handle(request);
  }
}
