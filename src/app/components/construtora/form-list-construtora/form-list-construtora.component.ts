import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-list-construtora',
  templateUrl: './form-list-construtora.component.html',
  styleUrls: ['./form-list-construtora.component.css']
})
export class FormListConstrutoraComponent implements OnInit {

  constructor(private readonly authService: AuthService){}

  private roles: string[] = [];

  ngOnInit(): void {
    this.authService.roles.subscribe(response => this.roles = response);
  }

  public isAdmin(){
    return this.roles.includes("ROLE_ADMIN");
  }

}
