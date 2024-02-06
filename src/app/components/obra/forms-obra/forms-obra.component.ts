import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, FormArray} from '@angular/forms';
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

  nullOrPattern(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value === null || control.value === '') {
        return null; // Valid if null or empty
      }
  
      const valid = pattern.test(control.value);
      return valid ? null : { pattern: { value: control.value } };
    };
  }

  createObraFormInstance() : FormGroup {
    return new FormGroup(
        {
        id: new FormControl(null),
        autoria: new FormControl(null, [Validators.required]),
        escritorio: new FormControl(null),
        nomeOficial: new FormControl(null, [Validators.required]),
        nomeAlternativo: new FormControl(null),
        endereco : new FormGroup(
          {
            tipoEndereco: new FormControl(null, [Validators.required]),
            enderecoTitulo: new FormControl(null),
            logradouro: new FormControl(null, [Validators.required]),
            numero: new FormControl(null, [Validators.required]),
            complemento: new FormControl(null),
            cep: new FormControl(null, [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]),
            municipio: new FormControl(null, [Validators.required]),
          }
        ),
        anoProjeto: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        anoConstrucao: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        construtora: new FormControl(null),
        condephaat: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        conpresp: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        iphan: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        usoOriginal: new FormControl(null, [Validators.required]),
        codigoOriginal: new FormControl(null, [Validators.required]),
        usoAtual: new FormControl(null),
        codigoAtual: new FormControl(null),
        dataUsoAtual: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        status: new FormControl(null),
        anoDemolicao: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        anoRestauro: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        anoReforma: new FormControl(null, [this.nullOrPattern(/^[0-9]{4}$/)]),
        arquitetoReforma: new FormControl(null),
        latitude: new FormControl(null, [Validators.required]),
        longitude: new FormControl(null, [Validators.required]),
        referencias: new FormArray([new FormControl(null, [Validators.required])]),
        validadoProfessora: new FormControl(false),
        validadoDPH: new FormControl(false),     
      }
    );
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
    (this.obraForm.get('referencias') as FormArray).push(new FormControl(null, [Validators.required]));
  }

  deletReferenciaFormInFormArray(index : number){
    (this.obraForm.get('referencias') as FormArray).removeAt(index);
  }

  createAutoriaOptions(){
    this.arquitetoService.getAllArquitetos().subscribe(
      {
        next: (response) => {
          this.autoriaOptions = response.content;
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
          this.construtoraOptions = response.content;
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

  clear() {
    this.obraForm = this.createObraFormInstance();
  }
}
