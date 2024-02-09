import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioLogado } from 'src/app/models/usuario-logado';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-form-list-construtora',
  templateUrl: './form-list-construtora.component.html',
  styleUrls: ['./form-list-construtora.component.css']
})
export class FormListConstrutoraComponent implements OnInit, OnDestroy {

  constructor(private readonly authService: AuthService){}

  private usuarioLogado?: UsuarioLogado;

  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.authService.usuarioLogado.subscribe(response => this.usuarioLogado = response);
  }

  public isLoggedIn(): boolean {
    return !!this.usuarioLogado;
  }

  public isAdmin(): boolean {
    return this.usuarioLogado?.role === '[ROLE_ADMIN]'
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
}
