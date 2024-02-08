import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Construtora } from 'src/app/models/construtora.model';
import { ConstrutoraService } from 'src/app/services/construtora-service/construtora.service';

@Component({
  selector: 'app-construtora-list',
  templateUrl: './construtora-list.component.html',
  styleUrls: ['./construtora-list.component.css']
})
export class ConstrutoraListComponent implements OnInit {

  construtorasListWasUpdated$!: Observable<Boolean>;

  construtoras : Construtora[] = [];

  @Input() public isAdmin?: Boolean;

  constructor(private construtoraService: ConstrutoraService) { 
    this.getAllConstrutoras();
  }

  ngOnInit() {

    this.construtoraService.construtorasListWasUpdated$.subscribe(
      response => {
        if (response) {
          this.getAllConstrutoras();
          this.construtoraService.resetConstrutorasListWasUpdated();
        }
      }
    );

  }

  getAllConstrutoras() {
    this.construtoraService.getAllConstrutoras().subscribe(
      {
        next: (response) => {
          this.construtoras = response.content;
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  editConstrutora(id: number) {
    this.construtoraService.getConstrutoraById(id).subscribe(
      {
        next : (response) => {
          this.construtoraService.selectConstrutoraForEdition(response);
          console.log(`The construtora with id: ${id} was selected for edition`);
        },
        error: (error) => {
          console.log("An error was found:", error);
        } 
      }
    );
  }

  deleteConstrutora(id: number){
    console.log(`The construtora with id: ${id} was selected for deletion`);
    this.construtoraService.deleteConstrutora(id).subscribe(
      {
        next: (response) => {
          this.construtoraService.setTrueConstrutorasListWasUpdated();
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }
}
