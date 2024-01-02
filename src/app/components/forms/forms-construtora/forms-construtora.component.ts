import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ConstrutoraService } from 'src/app/services/construtora-service/construtora.service';

@Component({
  selector: 'app-forms-construtora',
  templateUrl: './forms-construtora.component.html',
  styleUrls: ['./forms-construtora.component.css','./../forms-components.css']
})

export class FormsConstrutoraComponent implements OnInit {
  
  construtoraForm: FormGroup = new FormGroup({ });
  
  constructor(private construtoraService: ConstrutoraService) { }

  ngOnInit() {
    this.construtoraForm = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
    });

    this.construtoraService.selectedForEditionConstrutora$.subscribe(construtora => {
        if(construtora){
          this.construtoraForm.setValue({
            id: construtora.id,
            nome: construtora.nome
          });
        }
      }
    );

  }

  notNullValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value !== null ? null : { 'isNull': true };
  }

  registerConstrutora() {
    // Check if the form is valid and if the 'nome' control is not null or undefined
    const nomeControl = this.construtoraForm.get("nome");
    if (this.construtoraForm.valid && nomeControl) {
      const nomeValue = nomeControl.value;
      const idControl = this.construtoraForm.get("id");
      
      //TODO: add console messages that report possible errors 
      if(idControl){
        const idValue = idControl.value;
        this.construtoraService.editConstrutora(
          {
            id: idValue,
            nome: nomeValue
          }
        );
        this.construtoraService.clearSelectedConstrutoraForEdition();
      } else {
        this.construtoraService.registerConstrutora({ nome: nomeValue });
      }

      this.construtoraForm.reset();

    } else {
      console.log("Cannot add Construtora with empty name")
    }
  }


  

  onSubmit() {
    this.registerConstrutora();

  }
}
