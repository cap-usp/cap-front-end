import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-list-obra',
  templateUrl: './form-list-obra.component.html',
  styleUrls: ['./form-list-obra.component.css']
})
export class FormListObraComponent implements OnInit {

  constructor(private readonly authService: AuthService){}

  private roles: string[] = [];

  ngOnInit(): void {
    this.authService.roles.subscribe(response => this.roles = response);
  }

  public isAdmin(){
    return this.roles.includes("ROLE_ADMIN");
  }

}
