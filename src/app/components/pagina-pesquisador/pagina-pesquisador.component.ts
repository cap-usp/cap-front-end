import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-pesquisador',
  templateUrl: './pagina-pesquisador.component.html',
  styleUrls: ['./pagina-pesquisador.component.css']
})
export class PaginaPesquisadorComponent implements OnInit {
  // Variable to determine which component to display
  selectedComponent: string | null = null;

  ngOnInit(): void {
    // Set the initial selected component to 'FormsObra'
    this.selectedComponent = 'FormsObra';
  }

  // Method to set the selected component
  showComponent(component: string): void {
    this.selectedComponent = component;
  }
}
