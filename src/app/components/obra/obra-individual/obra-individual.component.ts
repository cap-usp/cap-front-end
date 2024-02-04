import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obra } from 'src/app/models/obra.model';
import { ArquitetoService } from 'src/app/services/arquiteto-service/arquiteto.service';
import { ObraService } from 'src/app/services/obra-service/obra-service.service';

@Component({
  selector: 'app-obra-individual',
  templateUrl: './obra-individual.component.html',
  styleUrls: ['./obra-individual.component.css']
})
export class ObraIndividualComponent implements OnInit{

  idObra : number | null = null;
  obraSelected : Obra | null = null;
  arquitetoSelected: string | null = null; 

  constructor(private _activatedRoute : ActivatedRoute, private obraService : ObraService, private arquitetoService : ArquitetoService){
    _activatedRoute.params.subscribe(
      (p) => {
        this.idObra = p["id"];
      }
    );
  }

  ngOnInit(){
    this.obraService.getObraById(this.idObra as number).subscribe(
      {
        next : (response) => {
          this.obraSelected = response;
        },
        error: (error) => {
          console.log("An error was found:", error);
        } 
      }
    );
    
    this.arquitetoService.getArquitetoById(this.obraSelected?.id as number).subscribe(
      {
        next : (response) => {
          this.arquitetoSelected = `${response.nome} ${response.nomeMeio} ${response.sobrenome}`;
        },
        error : (error) => {
          console.log("An error was found:", error);
        }
      }
    );

    

  }

}
