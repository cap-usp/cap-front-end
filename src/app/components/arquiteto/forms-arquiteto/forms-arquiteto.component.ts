import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-forms-arquiteto',
  templateUrl: './forms-arquiteto.component.html',
  styleUrls: ['./forms-arquiteto.component.css']
})
export class FormsArquitetoComponent implements OnInit {
  
  arquitetoForm: FormGroup = new FormGroup({ });
 
  constructor(){ }

  ngOnInit() {
    this.arquitetoForm = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      nomeMeio: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
      sobrenome: new FormControl(null, [Validators.required, Validators.minLength(1), this.notNullValidator]),
    });



  }

  notNullValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value !== null ? null : { 'isNull': true };
  }

  registerArquiteto(){
    if (this.arquitetoForm.valid) {
      const a = this.arquitetoForm.value;
      
    }
  }

  onSubmit() {
    console.log(this.arquitetoForm.value)
  }

}

