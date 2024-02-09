import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Obra } from 'src/app/models/obra.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  private url = `${environment.api}/obras`;

  // Observable responsible to report changes in the content of the api
  private obrasListWasUpdatedSubject = new BehaviorSubject<Boolean>(false);
  obrasListWasUpdated$  = this.obrasListWasUpdatedSubject.asObservable();

  // Observable responsible to report the edition of a construtora
  private selectedForEditionObraSubject = new BehaviorSubject<Obra | null>(null);
  selectedForEditionObra$ = this.selectedForEditionObraSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  setTrueObrasListWasUpdated() {
    this.obrasListWasUpdatedSubject.next(true);
  }
  resetObrasListWasUpdated() {
    this.obrasListWasUpdatedSubject.next(false);
  }

  getObraStatusEnum() {
    return this.httpClient.get<string[]>(`${this.url}/enums/obraStatus`);
  }

  getEnderecoTipoEnum() {
    return this.httpClient.get<string[]>(`${this.url}/enums/enderecoTipo`);
  }

  getEnderecoTituloEnum() {
    return this.httpClient.get<string[]>(`${this.url}/enums/enderecoTitulo`);
  }

  getAllObras() {
    return this.httpClient.get<{'content': Obra[]}>(`${this.url}`);
  }

  getObraById(id: number) {
    return this.httpClient.get<Obra>(`${this.url}/${id}`);
  }

  registerObra(obra: Obra) {
    return this.httpClient.post<Obra>(this.url, obra);
  }

  deleteObra(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  editObra(obra: Obra) {
    return this.httpClient.put<Obra>(`${this.url}/${obra.id}`, obra);
  }

  selectObraForEdition(obra: Obra){
    this.selectedForEditionObraSubject.next(obra);
  }

  clearSelectedObraForEdition() {
    this.selectedForEditionObraSubject.next(null);
  }
}
