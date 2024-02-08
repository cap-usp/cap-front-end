import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})

export class FormUsuarioComponent implements OnInit {
  
  usuarioForm: FormGroup = new FormGroup({ });
 
  constructor(private usuarioService : UsuarioService){ }

  ngOnInit() {
      this.usuarioForm = new FormGroup({
        id: new FormControl(null),
        login: new FormControl(null, [Validators.required]),
        senha: new FormControl(null, [Validators.required]),
        numeroUsp: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        autorizacao: new FormControl(null, [Validators.required]),
    });

    this.usuarioService.selectedForEditionUsuario$.subscribe(
      usuario => {
        if(usuario){
          this.usuarioForm.setValue(usuario);
        }
      }
    );
  }

  registerUsuario(){
    if (this.usuarioForm.valid) {
      if(this.usuarioForm.value['id'] !== null){
        this.usuarioService.editUsuario(this.usuarioForm.value).subscribe(
          {
            next: (response) => {
              this.usuarioService.setTrueUsuariosListWasUpdated();
              this.usuarioService.clearSelectedUsuarioForEdition();
              this.usuarioForm.reset();
            },
            error: (error) => {
              console.log("An error occured:", error);
            }
          }
        );
      } else {
        this.usuarioService.registerUsuario(this.usuarioForm.value).subscribe(
          {
            next: (response) => {
              this.usuarioService.setTrueUsuariosListWasUpdated();
              this.usuarioForm.reset();
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
    this.registerUsuario();
  }

  clear() {
    this.usuarioForm.reset();
  }
}
