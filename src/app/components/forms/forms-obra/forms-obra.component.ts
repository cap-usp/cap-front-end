import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forms-obra',
  templateUrl: './forms-obra.component.html',
  styleUrls: ['./forms-obra.component.css','./../forms-components.css']
})
export class FormsObraComponent implements OnInit {
  
  obraForm: FormGroup = new FormGroup({ });
  
 
  constructor(){ }

  ngOnInit() {
      this.obraForm = new FormGroup({
      autoria: new FormControl(""),
      escritorio: new FormControl(""),
      nomeOficial: new FormControl(""),
      nomeAlternativo: new FormControl(""),
      tipoEndereco: new FormControl(""),
      enderecoTitulo: new FormControl(""),
      logradouro: new FormControl(""),
      numero: new FormControl(""),
      complemento: new FormControl(""),
      cep: new FormControl(""),
      municipio: new FormControl(""),
      anoProjeto: new FormControl(""),
      anoConstrucao: new FormControl(""),
      construtora: new FormControl(""),
      condephaat: new FormControl(""),
      conpresp: new FormControl(""),
      iphan: new FormControl(""),
      usoOriginal: new FormControl(""),
      codigoOriginal: new FormControl(""),
      usoAtual: new FormControl(""),
      codigoAtual: new FormControl(""),
      dataUsoAtual: new FormControl(""),
      status: new FormControl(""),
      anoDemolicao: new FormControl(""),
      anoRestauro: new FormControl(""),
      anoReforma: new FormControl(""),
      arquitetoReforma: new FormControl(""),
      latitude: new FormControl(""),
      longitude: new FormControl(""),
      referencias: new FormControl(""),
      validadoProfessora: new FormControl(""),
      validadoDPH: new FormControl(""),     
    });
  }

  onSubmit() {
    console.log(this.obraForm.value)
  }
}
