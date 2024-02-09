import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseInterface } from '../../components/login/login-response.model';
import { environment } from 'src/environments/environment';
import { LoginInterface } from '../../components/login/login.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioLogado } from '../../models/usuario-logado';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioLogado = new BehaviorSubject<UsuarioLogado | undefined>(undefined);

  private readonly urlLogin: string = `${environment.api}/auth/login`;

  private expirationTimer: any;

  constructor(private readonly http: HttpClient, private readonly router: Router) { }

  public login(loginInterface: LoginInterface) {
    this.http.post<LoginResponseInterface>(this.urlLogin, loginInterface)
      .subscribe(response => {
          const tokenExpiration = new Date(new Date().setHours(new Date().getHours() + 2)).getTime();
          const usuario = new UsuarioLogado(response.id, response.login, response.token, tokenExpiration, response.role);
          this.usuarioLogado.next(usuario);
          localStorage.setItem('userData', JSON.stringify(usuario));
          this.router.navigate(['/']);
          this.autoLogout(tokenExpiration - new Date().getTime());
      })
  }

  public logout(): void {
    localStorage.removeItem('userData');
    this.usuarioLogado.next(undefined);
    this.router.navigate(['/']);
    if(this.expirationTimer){
      clearTimeout(this.expirationTimer);
    }
    this.expirationTimer = undefined;
  }

  public autoLogin(): void {
    const userDataStorage = localStorage.getItem('userData');

    if(!userDataStorage){
      return;
    }

    const userData: {
      id: number,
      login: string,
      _token: string,
      _tokenExpiration: number,
      role: string
    } = JSON.parse(userDataStorage);
    
    const user = new UsuarioLogado(userData.id, userData.login, userData._token, userData._tokenExpiration, userData.role);

    if(user.token){  
      this.usuarioLogado.next(user);
      this.autoLogout(user.tokenExpiration - new Date().getTime());
    }
  }

  public autoLogout(timeSeconds: number): void {
    this.expirationTimer = setTimeout(() => {
      this.logout();
    }, timeSeconds);
  }

}
