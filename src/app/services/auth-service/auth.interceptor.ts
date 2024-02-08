import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.usuarioLogado.pipe(
      take(1), 
      exhaustMap(user => {
        if(!user || !user.token){
          return next.handle(request);
        }
          const reqAuth = request.clone({
            setHeaders: {
              Authorization: `Bearer ${user.token}`
            }
          });
          return next.handle(reqAuth);
    }));
  }
}
