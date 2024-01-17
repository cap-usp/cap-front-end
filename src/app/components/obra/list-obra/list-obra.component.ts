import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Obra } from 'src/app/models/obra.model';
import { ObraService } from 'src/app/services/obra-service/obra-service.service';

@Component({
  selector: 'app-list-obra',
  templateUrl: './list-obra.component.html',
  styleUrls: ['./list-obra.component.css']
})
export class ListObraComponent implements OnInit, OnDestroy {

  obrasListWasUpdated$!: Observable<Boolean>;
  private obrasListWasUpdatedSubscription!: Subscription;

  obras : Obra[] = [];

  constructor(private obraService: ObraService) { 
    this.getAllObras();
  }

  ngOnInit() {

    this.obraService.obrasListWasUpdated$.subscribe(
      response => {
        if (response) {
          this.getAllObras();
          this.obraService.resetObrasListWasUpdated();
        }
      }
    );

  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks

  }

  // Other methods if needed

  getAllObras() {
    this.obraService.getAllObras().subscribe(
      {
        next: (response) => {
          this.obras = response;
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  validateProfessora(obra : Obra){
    obra.validadoProfessora = true;
    this.obraService.editObra(obra).subscribe(
      {
        next : (response) => {
          if(response){
            this.obraService.setTrueObrasListWasUpdated();
          }
        },
        error : (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  desvalidateProfessora(obra : Obra){
    obra.validadoProfessora = false;
    this.obraService.editObra(obra).subscribe(
      {
        next : (response) => {
          if(response){
            this.obraService.setTrueObrasListWasUpdated();
          }
        },
        error : (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  validateDPH(obra : Obra){
    obra.validadoDPH = true;
    this.obraService.editObra(obra).subscribe(
      {
        next : (response) => {
          if(response){
            this.obraService.setTrueObrasListWasUpdated();
          }
        },
        error : (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  desvalidateDPH(obra : Obra){
    obra.validadoDPH = false;
    this.obraService.editObra(obra).subscribe(
      {
        next : (response) => {
          if(response){
            this.obraService.setTrueObrasListWasUpdated();
          }
        },
        error : (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  editObra(id: number) {
    this.obraService.getObraById(id).subscribe(
      {
        next : (response) => {
          this.obraService.selectObraForEdition(response);
          console.log(`The obra with id: ${id} was selected for edition`);
        },
        error: (error) => {
          console.log("An error was found:", error);
        } 
      }
    );
  }

  deleteObra(id: number){
    console.log(`The obra with id: ${id} was selected for deletion`);
    this.obraService.deleteObra(id).subscribe(
      {
        next: (response) => {
          this.obraService.setTrueObrasListWasUpdated();
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }
}
