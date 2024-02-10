import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObraLista } from 'src/app/models/obra.model';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ObraService } from 'src/app/services/obra-service/obra-service.service';

@Component({
  selector: 'app-list-obra',
  templateUrl: './list-obra.component.html',
  styleUrls: ['./list-obra.component.css']
})
export class ListObraComponent implements OnInit {

  obrasListWasUpdated$!: Observable<Boolean>;
  
  obras : ObraLista[] = [];

  @Input() public isAdmin?: Boolean; 

  public isLoggedIn?: Boolean;

  constructor(private obraService: ObraService, private auth: AuthService) { 
    this.getAllObras();
  }

  ngOnInit() {
    this.auth.usuarioLogado.subscribe(usuarioLogado => this.isLoggedIn = !!usuarioLogado);

    this.obraService.obrasListWasUpdated$.subscribe(
      response => {
        if (response) {
          this.getAllObras();
          this.obraService.resetObrasListWasUpdated();
        }
      }
    );
  }

  getAllObras() {
    this.obraService.getAllObras().subscribe(
      {
        next: (response) => {
          this.obras = response.content;
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  toggleValidateProfessora(obra: ObraLista){
    this.obraService.toggleValidateProfessora(obra.id, obra.validadoProfessora).subscribe();
  }

  toggleValidateDph(obra: ObraLista){
    this.obraService.toggleValidateDph(obra.id, obra.validadoDph).subscribe();
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
