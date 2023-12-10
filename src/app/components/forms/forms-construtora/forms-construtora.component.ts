import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forms-construtora',
  templateUrl: './forms-construtora.component.html',
  styleUrls: ['./forms-construtora.component.css','./../forms-components.css']
})

export class FormsConstrutoraComponent implements OnInit {
  
  construtoraForm: FormGroup = new FormGroup({ });
 
  constructor(){ }

  ngOnInit() {
      this.construtoraForm = new FormGroup({
      nome: new FormControl(""),
    });
  }
}
