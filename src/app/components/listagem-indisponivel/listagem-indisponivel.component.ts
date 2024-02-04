import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listagem-indisponivel',
  templateUrl: './listagem-indisponivel.component.html',
  styleUrls: ['./listagem-indisponivel.component.css']
})
export class ListagemIndisponivelComponent {

  @Input() public nomeComponente?: string;

}
