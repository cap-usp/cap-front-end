import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Construtora } from 'src/app/models/construtora.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstrutoraService {
  private url = environment.api;

  // Observable responsible to report changes in the content of the api
  private construtorasListWasUpdatedSubject = new BehaviorSubject<Boolean>(false);
  construtorasListWasUpdated$  = this.construtorasListWasUpdatedSubject.asObservable();

  // Observable responsible to report the edition of a construtora
  private selectedForEditionConstrutoraSubject = new BehaviorSubject<Construtora | null>(null);
  selectedForEditionConstrutora$ = this.selectedForEditionConstrutoraSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  setTrueConstrutorasListWasUpdated() {
    this.construtorasListWasUpdatedSubject.next(true);
  }
  resetConstrutorasListWasUpdated() {
    this.construtorasListWasUpdatedSubject.next(false);
  }

  getAllConstrutoras() {
    return this.httpClient.get<Construtora[]>(`${this.url}/construtora`);
  }

  registerConstrutora(construtora: Construtora) {
    return this.httpClient.post<Construtora>(this.url + '/construtora', construtora);
  }

  deleteConstrutora(id: number) {
    return this.httpClient.delete<void>(`${this.url}/construtora/${id}`);
  }

  editConstrutora(construtora: Construtora) {
    return this.httpClient.put<Construtora>(`${this.url}/construtora/${construtora.id}`, construtora);
  }

  selectConstrutoraForEdition(construtora: Construtora){
    this.selectedForEditionConstrutoraSubject.next(construtora);
  }

  clearSelectedConstrutoraForEdition() {
    this.selectedForEditionConstrutoraSubject.next(null);
  }

}
