import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { Rutina } from './rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  darRutinas(): Observable<Rutina[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Rutina[]>(`${this.apiUrl}/rutina`, { headers: headers })
  }

  darRutina(id: number): Observable<Rutina> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Rutina>(`${this.apiUrl}/rutina/${id}`, { headers: headers })
  }
  crearRutina(rutina): Observable<Rutina>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.post<Rutina>(`${this.apiUrl}/rutina`, rutina, { headers: headers })
  }

  editarRutina(rutina: Rutina): Observable<Rutina> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.put<Rutina>(`${this.apiUrl}/rutina/${rutina.id}`, rutina, { headers: headers });
  }

}
