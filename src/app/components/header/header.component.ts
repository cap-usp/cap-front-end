import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsuarioLogado } from 'src/app/models/usuario-logado';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public usuarioLogado?: UsuarioLogado;

  private subscription?: Subscription;

  constructor(private readonly authService: AuthService){}

  ngOnInit(): void {
    this.subscription = this.authService.usuarioLogado.subscribe(response => this.usuarioLogado = response);
  }

  public isLoggedIn(): boolean {
    return !!this.usuarioLogado;
  }

  public isAdmin(): boolean {
    return this.usuarioLogado?.role === "[ROLE_ADMIN]";
  }

  public sairDoSistema(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
}
