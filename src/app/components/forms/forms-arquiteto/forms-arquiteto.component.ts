import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forms-arquiteto',
  templateUrl: './forms-arquiteto.component.html',
  styleUrls: ['./forms-arquiteto.component.css','./../forms-components.css']
})
export class FormsArquitetoComponent implements OnInit {
  
  arquitetoForm: FormGroup = new FormGroup({ });
 
  constructor(){ }

  ngOnInit() {
      this.arquitetoForm = new FormGroup({
      nome: new FormControl(""),
      nomeMeio: new FormControl(""),
      sobrenome: new FormControl(""),
    });
  }
}

