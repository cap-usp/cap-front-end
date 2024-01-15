import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})

export class ListUsuarioComponent implements OnInit, OnDestroy {

  usuariosListWasUpdated$!: Observable<Boolean>;
  private usuariosListWasUpdatedSubscription!: Subscription;

  usuarios : Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { 
    this.getAllUsuarios();
  }

  ngOnInit() {

    this.usuarioService.usuariosListWasUpdated$.subscribe(
      response => {
        if (response) {
          this.getAllUsuarios();
          this.usuarioService.resetUsuariosListWasUpdated();
        }
      }
    );

  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks

  }

  // Other methods if needed

  getAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(
      {
        next: (response) => {
          this.usuarios = response;
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }

  editUsuario(id: number) {
    this.usuarioService.getUsuarioById(id).subscribe(
      {
        next : (response) => {
          this.usuarioService.selectUsuarioForEdition(response);
          console.log(`The usuario with id: ${id} was selected for edition`);
        },
        error: (error) => {
          console.log("An error was found:", error);
        } 
      }
    );
  }

  deleteUsuario(id: number){
    console.log(`The usuario with id: ${id} was selected for deletion`);
    this.usuarioService.deleteUsuario(id).subscribe(
      {
        next: (response) => {
          this.usuarioService.setTrueUsuariosListWasUpdated();
        },
        error: (error) => {
          console.log("An error was found:", error);
        }
      }
    );
  }
}

