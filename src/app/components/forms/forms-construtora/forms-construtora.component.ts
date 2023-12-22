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
      nome: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
    });
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
      this.construtoraService.registerConstrutora({ nome: nomeValue })
        .subscribe((response) => {
                                    if(response){
                                      console.log("New construtora added")
                                    } else {
                                      console.log("Failed adding new construtora")
                                    }
                                  });
    } else {
      console.log("Cannot add Construtora with empty name")
    }
  }
  

  onSubmit() {
    this.registerConstrutora();

  }
}
