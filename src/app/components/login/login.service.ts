import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseInterface } from './login-response.model';
import { environment } from 'src/environments/environment';
import { LoginInterface } from './login.model';
import { BehaviorSubject } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public roles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  private readonly urlLogin: string = `${environment.api}/auth/login`;

  constructor(private readonly http: HttpClient, private readonly router: Router) { }

  public login(loginInterface: LoginInterface){
    this.http.post<LoginResponseInterface>(this.urlLogin, loginInterface)
      .subscribe(response => {
          this.roles.next(response.role);
          localStorage.setItem('Authorization', response.token);
          this.router.navigate(['/form-list-obra']);
      })
  }

}
