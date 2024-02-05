import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseInterface } from '../components/login/login-response.model';
import { environment } from 'src/environments/environment';
import { LoginInterface } from '../components/login/login.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public roles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  private readonly urlLogin: string = `${environment.api}/auth/login`;

  constructor(private readonly http: HttpClient, private readonly router: Router) { }

  public login(loginInterface: LoginInterface){
    this.http.post<LoginResponseInterface>(this.urlLogin, loginInterface)
      .subscribe(response => {
          this.roles.next(response.role);
          localStorage.setItem('Authorization', response.token);
          this.router.navigate(['/']);
      })
  }

  public logout(): void{
    localStorage.clear();
    this.roles.next([]);
    this.router.navigate(['/']);
  }

}
