import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-info-obra',
  templateUrl: './info-obra.component.html',
  styleUrls: ['./info-obra.component.css']
})

export class InfoObraComponent implements OnInit {
  obraInfo: any; // Variável para armazenar as informações da obra

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarInfoObra();
  }

  private carregarInfoObra() {
    this.http.get('../assets/data/InfoObra.json').subscribe((data: any) => {
      this.obraInfo = data.obra; // Supondo que o objeto JSON tenha uma chave chamada "obra"
      
    });
  }
}
