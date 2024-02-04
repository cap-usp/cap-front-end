import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ConstrutoraService } from 'src/app/services/construtora-service/construtora.service';

@Component({
  selector: 'app-forms-construtora',
  templateUrl: './forms-construtora.component.html',
  styleUrls: ['./forms-construtora.component.css']
})

export class FormsConstrutoraComponent implements OnInit {
  
  construtoraForm: FormGroup = new FormGroup({ });
  
  constructor(private construtoraService: ConstrutoraService) { }

  ngOnInit() {
    this.construtoraForm = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required]),
    });

    this.construtoraService.selectedForEditionConstrutora$.subscribe(construtora => {
        if(construtora){
          this.construtoraForm.setValue(construtora);
        }
      }
    );

  }

  registerConstrutora() {
    // Check if the form is valid
    if (this.construtoraForm.valid) {
      const nomeControl = this.construtoraForm.get("nome");
  
      // Check if the 'nome' control exists and its value is not null or undefined
      if (nomeControl && nomeControl.value !== null && nomeControl.value !== undefined) {
        const nomeValue = nomeControl.value;
  
        const idControl = this.construtoraForm.get("id");
  
        // Check if 'id' control exists
        if (idControl && idControl.value !== null && idControl.value !== undefined) {
          const idValue = idControl.value;
  
          // If 'id' control exists, it's an edit operation
          this.construtoraService.editConstrutora({
            id: idValue,
            nome: nomeValue
          }).subscribe(
            {
              next: (response) => {
                this.construtoraService.setTrueConstrutorasListWasUpdated();
                this.construtoraService.clearSelectedConstrutoraForEdition();
                this.construtoraForm.reset();
              },
              error: (error) => {
                console.log("An error occured:", error);
              }
            }
          );
        } else {
          // If 'id' control does not exist, it's a new registration
          this.construtoraService.registerConstrutora({ nome: nomeValue })
          .subscribe(
            {
              next: (response) => {
                this.construtoraService.setTrueConstrutorasListWasUpdated();
                this.construtoraForm.reset();
                console.log("The register was successful");
              },
              error: (error) => {
                console.log("An error was found", error);
              }
            }
          );
        }
  
      } else {
        console.log("Cannot add Construtora with empty name");
      }
    } else {
      console.log("Form is not valid");
    }
  }
  
  onSubmit() {
    this.registerConstrutora();

  }
}
