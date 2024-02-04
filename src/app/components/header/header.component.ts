import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public roles: string[] = [];

  constructor(private readonly authService: AuthService){}

  ngOnInit(): void {
    this.authService.roles.subscribe(response => this.roles = response);
  }

  public isAdmin(): boolean{
    return this.roles.includes("ROLE_ADMIN");
  }

  public sairDoSistema(): void {
    console.log("tá aqui")
    this.authService.logout();
  }
  
}
