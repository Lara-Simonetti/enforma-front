import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { Entrenador } from './entrenador';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {
  
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  darEntrenadores(): Observable<Entrenador[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Entrenador[]>(`${this.apiUrl}entrenador`, {headers: headers})
  }
}
