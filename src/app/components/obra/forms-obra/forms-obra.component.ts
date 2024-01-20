import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormArray} from '@angular/forms';
import { ObraService } from 'src/app/services/obra-service/obra-service.service';
import { ArquitetoService } from 'src/app/services/arquiteto-service/arquiteto.service';
import { ConstrutoraService } from 'src/app/services/construtora-service/construtora.service';
import { Arquiteto } from 'src/app/models/arquiteto.model';
import { Construtora } from 'src/app/models/construtora.model';

@Component({
  selector: 'app-forms-obra',
  templateUrl: './forms-obra.component.html',
  styleUrls: ['./forms-obra.component.css']
})
export class FormsObraComponent implements OnInit {
  
  obraForm: FormGroup = new FormGroup({ });
  
  //The ideia is to append the array in a function that
  //is able to fetch the authors from the API
  autoriaOptions : Arquiteto[] = [];

  construtoraOptions : Construtora[] = [];

  statusOptions = [
    {value: "construido", label:"Construído"},
    {value: "demolido", label:"Demolido"},
    {value: "reformado", label:"Reformado"},
    {value: "restaurado", label:"Restaurado"},
  ];
  validadoOptions = [
    {value: true, label: "Sim"},
    {value: false, label: "Não"},
  ];
  constructor(private obraService: ObraService, private arquitetoService: ArquitetoService, private construtoraService: ConstrutoraService){
    this.createAutoriaOptions();
    this.createConstrutoraOptions();
  }

  ngOnInit() {
    this.obraForm = this.createObraFormInstance();

    this.obraService.selectedForEditionObra$.subscribe(
      obra => {
        if(obra) {
          this.obraForm = this.createObraFormInstance();
          for(let i = 1; i < obra.referencias.length; i++){
            this.addReferenciaInFormArray();
          }
          this.obraForm.setValue(obra);
        }
      }
  );

  }

  notNullValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value !== null ? null : { 'isNull': true };
  }

  createObraFormInstance() : FormGroup {
    return new FormGroup({
      id: new FormControl(null),
      autoria: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      escritorio: new FormControl(null),
      nomeOficial: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      nomeAlternativo: new FormControl(null),
      tipoEndereco: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      enderecoTitulo: new FormControl(null),
      logradouro: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      numero: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      complemento: new FormControl(null),
      cep: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      municipio: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      anoProjeto: new FormControl(null),
      anoConstrucao: new FormControl(null),
      construtora: new FormControl(null),
      condephaat: new FormControl(null),
      conpresp: new FormControl(null),
      iphan: new FormControl(null),
      usoOriginal: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      codigoOriginal: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      usoAtual: new FormControl(null),
      codigoAtual: new FormControl(null),
      dataUsoAtual: new FormControl(null),
      status: new FormControl(null),
      anoDemolicao: new FormControl(null),
      anoRestauro: new FormControl(null),
      anoReforma: new FormControl(null),
      arquitetoReforma: new FormControl(null),
      latitude: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      longitude: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      referencias: new FormArray([new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator])]),
      validadoProfessora: new FormControl(false),
      validadoDPH: new FormControl(false),     
    });
  }

  get referenciaFormArray() : FormArray {
    return this.obraForm.get('referencias') as FormArray;
  }

  get referenciasIndexArray() : Array<number> {
    return Array.from({ length: this.referenciaFormArray.controls.length }, (_, i) => i);
  }

  getReferenciaFormControlByIndex(index : number) : FormControl{
    return this.referenciaFormArray.controls[index] as FormControl;
  }

  addReferenciaInFormArray(){
    (this.obraForm.get('referencias') as FormArray).push(new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]));
  }

  deletReferenciaFormInFormArray(index : number){
    (this.obraForm.get('referencias') as FormArray).removeAt(index);
  }



  createAutoriaOptions(){
    this.arquitetoService.getAllArquitetos().subscribe(
      {
        next: (response) => {
          this.autoriaOptions = response;
        },
        error: (error) => {
          console.log("An error occured:", error);
        }
      }
    );
  }

  createConstrutoraOptions(){
    this.construtoraService.getAllConstrutoras().subscribe(
      {
        next: (response) => {
          this.construtoraOptions = response;
        },
        error: (error) => {
          console.log("An error occured:", error);
        }
      }
    );
  }

  regiterObra(){
    if(this.obraForm.valid) {
      if(this.obraForm.value['id'] !== null){
        this.obraService.editObra(this.obraForm.value).subscribe(
          {
            next: (response) => {
              this.obraService.setTrueObrasListWasUpdated();
              this.obraService.clearSelectedObraForEdition();
              this.obraForm = this.createObraFormInstance();
            },
            error: (error) => {
              console.log("An error occured:", error);
            }
          }
        );
      } else {
        this.obraService.registerObra(this.obraForm.value).subscribe(
          {
            next: (response) => {
              this.obraService.setTrueObrasListWasUpdated();
              this.obraForm = this.createObraFormInstance();
              console.log("The register was successful");
            },
            error: (error) => {
              console.log("An error was found:", error);
            }
          }
        );
      }
    } else {
      console.log("Form is invalid");
    }
  }

  onSubmit() {
    this.regiterObra();
  }
}
