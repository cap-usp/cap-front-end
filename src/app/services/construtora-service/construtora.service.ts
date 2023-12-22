import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Construtora } from 'src/app/models/construtora.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstrutoraService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) { }

  getConstrutoras() {
    return this.httpClient.get<Construtora[]>(this.url + '/construtora');
  }

  registerConstrutora (construtora : Construtora) {
    return this.httpClient.post<Construtora>(this.url + '/construtora', construtora);
  }
}
