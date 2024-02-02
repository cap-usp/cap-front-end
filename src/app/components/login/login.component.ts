import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginInterface } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginForm: FormGroup = new FormGroup({});

  constructor(private readonly loginService: LoginService){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const loginData: LoginInterface = {
      login: this.loginForm.value.login,
      senha: this.loginForm.value.senha
    }
    console.log(loginData);
    this.loginService.login(loginData);
  }

}
