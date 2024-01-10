import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})

export class FormUsuarioComponent implements OnInit {
  
  usuarioForm: FormGroup = new FormGroup({ });
 
  constructor(){ }

  ngOnInit() {
      this.usuarioForm = new FormGroup({
      login: new FormControl(""),
      senha: new FormControl(""),
      numeroUSP: new FormControl(""),
      email: new FormControl(""),
    });
  }

  onSubmit() {
    console.log(this.usuarioForm.value)
  }

}
