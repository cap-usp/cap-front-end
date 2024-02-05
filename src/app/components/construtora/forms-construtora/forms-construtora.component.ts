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

  regiterConstrutora(){
    if(this.construtoraForm.valid) {
      if(this.construtoraForm.value['id'] !== null){
        this.construtoraService.editConstrutora(this.construtoraForm.value).subscribe(
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
        this.construtoraService.registerConstrutora(this.construtoraForm.value).subscribe(
          {
            next: (response) => {
              this.construtoraService.setTrueConstrutorasListWasUpdated();
              this.construtoraForm.reset();
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
    this.regiterConstrutora();

  }

  clear() {
    this.construtoraForm.reset();
  }
}
