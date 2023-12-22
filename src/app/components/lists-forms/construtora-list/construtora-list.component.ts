import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Construtora } from 'src/app/models/construtora.model';
import { ConstrutoraService } from 'src/app/services/construtora-service/construtora.service';

@Component({
  selector: 'app-construtora-list',
  templateUrl: './construtora-list.component.html',
  styleUrls: ['./construtora-list.component.css']
})
export class ConstrutoraListComponent {
  construtoras$ = new Observable<Construtora[]>();

  constructor (private construtoraService: ConstrutoraService) {
    this.getConstrutoras();
  }

  getConstrutoras() {
    //this.construtoraService.getConstrutoras().subscribe(construtoras => this.construtoras = construtoras);
    this.construtoras$ = this.construtoraService.getConstrutoras();
  }
}
