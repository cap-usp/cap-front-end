import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Construtora } from 'src/app/models/construtora.model';
import { ConstrutoraService } from 'src/app/services/construtora-service/construtora.service';

@Component({
  selector: 'app-construtora-list',
  templateUrl: './construtora-list.component.html',
  styleUrls: ['./construtora-list.component.css']
})
export class ConstrutoraListComponent implements OnInit, OnDestroy {
  construtoras$!: Observable<Construtora[]>;
  private construtorasSubscription!: Subscription;

  constructor(private construtoraService: ConstrutoraService) { }

  ngOnInit() {
    this.construtoraService.updateConstrutoras();

    this.construtoras$ = this.construtoraService.construtoras$;

    // Subscribe to updates
    this.construtorasSubscription = this.construtoras$.subscribe();
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.construtorasSubscription.unsubscribe();
  }

  // Other methods if needed

  editConstrutora(construtora: Construtora) {
    this.construtoraService.selectConstrutoraForEdition(construtora);
    console.log(`The construtora with id: ${construtora.id} was selected for edition`);
  }

  deleteConstrutora(id: number){
    this.construtoraService.deleteConstrutora(id);
    console.log(`The construtora with id: ${id} was selected for deletion`);
  }

  

}
