import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { Entrenamiento } from './entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  darEntrenamientosEjercicio(idPersona: number): Observable<Entrenamiento[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Entrenamiento[]>(`${this.apiUrl}/entrenamientos/ejercicios/${idPersona}`, { headers: headers })
  }

  darEntrenamientoEjercicio(id: number): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Entrenamiento>(`${this.apiUrl}/entrenamiento/ejercicios/${id}`, { headers: headers })
  }

  crearEntrenamientoEjercicio(entrenamiento: Entrenamiento, idPersona: number): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.post<Entrenamiento>(`${this.apiUrl}/entrenamientos/ejercicios/${idPersona}`, entrenamiento, { headers: headers })
  }

  editarEntrenamientoEjercicio(entrenamiento: Entrenamiento): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.put<Entrenamiento>(`${this.apiUrl}/entrenamiento/ejercicios/${entrenamiento.id}`, entrenamiento, { headers: headers })
  }

  eliminarEntrenamientoEjercicio(idEntrenamiento: number): Observable<Entrenamiento> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.delete<Entrenamiento>(`${this.apiUrl}/entrenamiento/ejercicios/${idEntrenamiento}`, { headers: headers })
  }
// Métodos de entrenamientos con rutinas

darEntrenamientosRutina(idPersona: number): Observable<Entrenamiento[]> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  })
  return this.http.get<Entrenamiento[]>(`${this.apiUrl}/entrenamientos/rutinas/${idPersona}`, { headers: headers })
}

darEntrenamientoRutina(id: number): Observable<Entrenamiento> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  })
  return this.http.get<Entrenamiento>(`${this.apiUrl}/entrenamiento/rutinas/${id}`, { headers: headers })
}

crearEntrenamientoRutina(entrenamiento: Entrenamiento, idPersona: number): Observable<Entrenamiento> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  return this.http.post<Entrenamiento>(`${this.apiUrl}/entrenamientos/rutinas/${idPersona}`, entrenamiento, { headers: headers })
}

editarEntrenamientoRutina(entrenamiento: Entrenamiento): Observable<Entrenamiento> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  return this.http.put<Entrenamiento>(`${this.apiUrl}/entrenamiento/rutinas/${entrenamiento.id}`, entrenamiento, { headers: headers })
}

eliminarEntrenamientoRutina(idEntrenamiento: number): Observable<Entrenamiento> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  return this.http.delete<Entrenamiento>(`${this.apiUrl}/entrenamiento/rutinas/${idEntrenamiento}`, { headers: headers })
}

}
