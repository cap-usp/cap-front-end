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

  // BehaviorSubject to store and emit the latest list of construtoras
  private construtorasSubject = new BehaviorSubject<Construtora[]>([]);
  
  // Observable to which components can subscribe for real-time updates
  construtoras$ = this.construtorasSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  updateConstrutoras() {
    this.httpClient.get<Construtora[]>(this.url + '/construtora')
      .subscribe(construtoras => {
        // Update the BehaviorSubject with the latest list of construtoras
        this.construtorasSubject.next(construtoras);
      });
  }

  registerConstrutora(construtora: Construtora) {
    return this.httpClient.post<Construtora>(this.url + '/construtora', construtora)
      .subscribe(() => {
        // Update the BehaviorSubject with the latest list of construtoras
        this.updateConstrutoras();
      });
  }

  editConstrutora(construtora: Construtora) {
    return this.httpClient.put<Construtora>(this.url + '/construtora', construtora)
      .subscribe(() => {
        // Update the BehaviorSubject with the latest list of construtoras
        this.updateConstrutoras();
      });
  }
}
