import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Arquiteto } from 'src/app/models/arquiteto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArquitetoService {
  private url = environment.api;

  // Observable responsible to report changes in the content of the api
  private arquitetosListWasUpdatedSubject = new BehaviorSubject<Boolean>(false);
  arquitetosListWasUpdated$  = this.arquitetosListWasUpdatedSubject.asObservable();

  // Observable responsible to report the edition of a construtora
  private selectedForEditionArquitetoSubject = new BehaviorSubject<Arquiteto | null>(null);
  selectedForEditionArquiteto$ = this.selectedForEditionArquitetoSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  setTrueArquitetosListWasUpdated() {
    this.arquitetosListWasUpdatedSubject.next(true);
  }
  resetArquitetosListWasUpdated() {
    this.arquitetosListWasUpdatedSubject.next(false);
  }

  getAllArquitetos() {
    return this.httpClient.get<Arquiteto[]>(`${this.url}/arquiteto`);
  }

  getArquitetoById(id: number) {
    return this.httpClient.get<Arquiteto>(`${this.url}/arquiteto/${id}`);
  }

  registerArquiteto(arquiteto: Arquiteto) {
    return this.httpClient.post<Arquiteto>(this.url + '/arquiteto', arquiteto);
  }

  deleteArquiteto(id: number) {
    return this.httpClient.delete<void>(`${this.url}/arquiteto/${id}`);
  }

  editArquiteto(arquiteto: Arquiteto) {
    return this.httpClient.put<Arquiteto>(`${this.url}/arquiteto/${arquiteto.id}`, arquiteto);
  }

  selectArquitetoForEdition(arquiteto: Arquiteto){
    this.selectedForEditionArquitetoSubject.next(arquiteto);
  }

  clearSelectedArquitetoForEdition() {
    this.selectedForEditionArquitetoSubject.next(null);
  }
}
