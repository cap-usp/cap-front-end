import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Obra } from 'src/app/models/obra.model';
import { UsuarioLogado } from 'src/app/models/usuario-logado';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ObraService } from 'src/app/services/obra-service/obra-service.service';

@Component({
  selector: 'app-list-obra',
  templateUrl: './list-obra.component.html',
  styleUrls: ['./list-obra.component.css']
})
export class ListObraComponent implements OnInit {

  obrasListWasUpdated$!: Observable<Boolean>;
  
  obras : Obra[] = [];

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

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks

  }

  // Other methods if needed

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
