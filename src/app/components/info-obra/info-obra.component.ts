import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-info-obra',
  templateUrl: './info-obra.component.html',
  styleUrls: ['./info-obra.component.css']
})

export class InfoObraComponent implements OnInit {
  obraInfo: any; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.carregarInfoObra();
  }

  private carregarInfoObra() {
    this.http.get('../assets/data/InfoObra.json').subscribe((data: any) => {
      this.obraInfo = data.obra; 
      
    });
  }
}
