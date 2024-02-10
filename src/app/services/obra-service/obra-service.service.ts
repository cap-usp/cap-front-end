import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObraLista, ObraIndividual } from 'src/app/models/obra.model';
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
  private selectedForEditionObraSubject = new BehaviorSubject<ObraIndividual | null>(null);
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
    return this.httpClient.get<{'content': ObraLista[]}>(`${this.url}`);
  }

  getObraById(id: number) {
    return this.httpClient.get<ObraIndividual>(`${this.url}/${id}`);
  }

  registerObra(obra: ObraIndividual) {
    return this.httpClient.post<ObraIndividual>(this.url, obra);
  }

  deleteObra(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  editObra(obra: ObraIndividual) {
    return this.httpClient.put<ObraIndividual>(`${this.url}/${obra.id}`, obra);
  }

  selectObraForEdition(obra: ObraIndividual){
    this.selectedForEditionObraSubject.next(obra);
  }

  clearSelectedObraForEdition() {
    this.selectedForEditionObraSubject.next(null);
  }

  toggleValidateProfessora(id: number, validadoProfessora: boolean) {
    return this.httpClient.put(`${this.url}/${id}`, {validadoProfessora: !validadoProfessora});
  }

  toggleValidateDph(id: number, validadoDph: boolean) {
    return this.httpClient.put(`${this.url}/${id}`, {validadoDph: !validadoDph});
  }
}
