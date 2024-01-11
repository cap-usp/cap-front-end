import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Arquiteto } from 'src/app/models/arquiteto.model';
import { ArquitetoService } from 'src/app/services/arquiteto-service/arquiteto.service';

@Component({
  selector: 'app-list-arquiteto',
  templateUrl: './list-arquiteto.component.html',
  styleUrls: ['./list-arquiteto.component.css']
})
export class ListArquitetoComponent implements OnInit, OnDestroy {

  arquitetosListWasUpdated$!: Observable<Boolean>;
  private arquitetosListWasUpdatedSubscription!: Subscription;

  arquitetos : Arquiteto[] = [];

  constructor(private arquitetoService: ArquitetoService) { 
    this.getAllArquitetos();
  }

  ngOnInit() {

    this.arquitetoService.arquitetosListWasUpdated$.subscribe(
      response => {
        if (response) {
          this.getAllArquitetos();
          this.arquitetoService.resetArquitetosListWasUpdated();
        }
      }
    );

  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks

  }

  // Other methods if needed

  getAllArquitetos() {
    this.arquitetoService.getAllArquitetos().subscribe(
      {
        next: (response) => {
          this.arquitetos = response;
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  editArquiteto(id: number) {
    this.arquitetoService.getArquitetoById(id).subscribe(
      {
        next : (response) => {
          this.arquitetoService.selectArquitetoForEdition(response);
          console.log(`The arquiteto with id: ${id} was selected for edition`);
        },
        error: (error) => {
          console.log("An error was found:", error);
        } 
      }
    );
  }

  deleteArquiteto(id: number){
    console.log(`The arquiteto with id: ${id} was selected for deletion`);
    this.arquitetoService.deleteArquiteto(id).subscribe(
      {
        next: (response) => {
          this.arquitetoService.setTrueArquitetosListWasUpdated();
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }
}
