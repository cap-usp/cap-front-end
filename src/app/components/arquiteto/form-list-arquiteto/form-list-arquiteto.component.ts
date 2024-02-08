import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioLogado } from 'src/app/models/usuario-logado';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-form-list-arquiteto',
  templateUrl: './form-list-arquiteto.component.html',
  styleUrls: ['./form-list-arquiteto.component.css']
})
export class FormListArquitetoComponent implements OnInit, OnDestroy {

  constructor(private readonly authService: AuthService){}

  private usuarioLogado?: UsuarioLogado;

  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.authService.usuarioLogado.subscribe(response => this.usuarioLogado = response);
  }

  public isLoggedIn(): boolean {
    return !!this.usuarioLogado;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
}
