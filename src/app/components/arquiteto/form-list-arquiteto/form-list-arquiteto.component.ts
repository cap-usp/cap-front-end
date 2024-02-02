import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-list-arquiteto',
  templateUrl: './form-list-arquiteto.component.html',
  styleUrls: ['./form-list-arquiteto.component.css']
})
export class FormListArquitetoComponent implements OnInit{

  constructor(private readonly authService: AuthService){}

  private roles: string[] = [];

  ngOnInit(): void {
    this.authService.roles.subscribe(response => this.roles = response);
  }

  public isAdmin(){
    return this.roles.includes("ROLE_ADMIN");
  }
  
}
