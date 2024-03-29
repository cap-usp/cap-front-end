import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioCadastro } from 'src/app/models/usuario-cadastro';
import { Usuario } from 'src/app/models/usuario-leitura.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlCadastro = `${environment.api}/auth/cadastro`

  private url = `${environment.api}/usuarios`;

  // Observable responsible to report changes in the content of the api
  private usuariosListWasUpdatedSubject = new BehaviorSubject<Boolean>(false);
  usuariosListWasUpdated$  = this.usuariosListWasUpdatedSubject.asObservable();

  // Observable responsible to report the edition of a usuario
  private selectedForEditionUsuarioSubject = new BehaviorSubject<Usuario | null>(null);
  selectedForEditionUsuario$ = this.selectedForEditionUsuarioSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  setTrueUsuariosListWasUpdated() {
    this.usuariosListWasUpdatedSubject.next(true);
  }
  resetUsuariosListWasUpdated() {
    this.usuariosListWasUpdatedSubject.next(false);
  }

  getAllUsuarios() {
    return this.httpClient.get<{'content': Usuario[]}>(`${this.url}`);
  }

  getUsuarioById(id: number) {
    return this.httpClient.get<Usuario>(`${this.url}/${id}`);
  }

  registerUsuario(usuario: UsuarioCadastro) {
    return this.httpClient.post(this.urlCadastro, usuario);
  }

  deleteUsuario(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  editUsuario(usuario: any) {
    return this.httpClient.put<Usuario>(`${this.url}/${usuario.id}`, usuario);
  }

  selectUsuarioForEdition(usuario: Usuario){
    this.selectedForEditionUsuarioSubject.next(usuario);
  }

  clearSelectedUsuarioForEdition() {
    this.selectedForEditionUsuarioSubject.next(null);
  }

}
