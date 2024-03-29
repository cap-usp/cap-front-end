import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { ArquitetoService } from 'src/app/services/arquiteto-service/arquiteto.service';

@Component({
  selector: 'app-forms-arquiteto',
  templateUrl: './forms-arquiteto.component.html',
  styleUrls: ['./forms-arquiteto.component.css']
})
export class FormsArquitetoComponent implements OnInit {
  
  arquitetoForm: FormGroup = new FormGroup({ });
 
  constructor(private arquitetoService: ArquitetoService){ }

  ngOnInit() {
    this.arquitetoForm = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required]),
      nomeMeio: new FormControl(null),
      sobrenome: new FormControl(null, [Validators.required]),
    });

    this.arquitetoService.selectedForEditionArquiteto$.subscribe(
      arquiteto => {
        if(arquiteto){
          this.arquitetoForm.setValue(arquiteto);
        }
      }
    );

  }

  registerArquiteto(){
    if (this.arquitetoForm.valid) {
      if(this.arquitetoForm.value['id'] !== null){
        this.arquitetoService.editArquiteto(this.arquitetoForm.value).subscribe(
          {
            next: (response) => {
              this.arquitetoService.setTrueArquitetosListWasUpdated();
              this.arquitetoService.clearSelectedArquitetoForEdition();
              this.arquitetoForm.reset();
            },
            error: (error) => {
              console.log("An error occured:", error);
            }
          }
        );
      } else {
        this.arquitetoService.registerArquiteto(this.arquitetoForm.value).subscribe(
          {
            next: (response) => {
              this.arquitetoService.setTrueArquitetosListWasUpdated();
              this.arquitetoForm.reset();
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
    this.registerArquiteto();
  }

  clear() {
    this.arquitetoForm.reset();
  }

}

