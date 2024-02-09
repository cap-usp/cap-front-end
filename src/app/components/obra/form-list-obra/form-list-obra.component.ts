import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsuarioLogado } from 'src/app/models/usuario-logado';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-form-list-obra',
  templateUrl: './form-list-obra.component.html',
  styleUrls: ['./form-list-obra.component.css']
})
export class FormListObraComponent implements OnInit, OnDestroy {

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
    return this.usuarioLogado?.role === '[ROLE_ADMIN]';
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
