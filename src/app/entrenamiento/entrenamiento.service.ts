import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { EntrenamientoEjercicio, EntrenamientoRutina } from './entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  darEntrenamientosEjercicio(idPersona: number): Observable<EntrenamientoEjercicio[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<EntrenamientoEjercicio[]>(`${this.apiUrl}/entrenamientos/ejercicios/${idPersona}`, { headers: headers })
  }

  darEntrenamientoEjercicio(id: number): Observable<EntrenamientoEjercicio> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<EntrenamientoEjercicio>(`${this.apiUrl}/entrenamiento/ejercicios/${id}`, { headers: headers })
  }

  crearEntrenamientoEjercicio(entrenamiento: EntrenamientoEjercicio, idPersona: number): Observable<EntrenamientoEjercicio> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.post<EntrenamientoEjercicio>(`${this.apiUrl}/entrenamientos/ejercicios/${idPersona}`, entrenamiento, { headers: headers })
  }

  editarEntrenamientoEjercicio(entrenamiento: EntrenamientoEjercicio): Observable<EntrenamientoEjercicio> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.put<EntrenamientoEjercicio>(`${this.apiUrl}/entrenamiento/ejercicios/${entrenamiento.id}`, entrenamiento, { headers: headers })
  }

  eliminarEntrenamientoEjercicio(idEntrenamiento: number): Observable<EntrenamientoEjercicio> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.delete<EntrenamientoEjercicio>(`${this.apiUrl}/entrenamiento/ejercicios/${idEntrenamiento}`, { headers: headers })
  }
// Métodos de entrenamientos con rutinas

darEntrenamientosRutina(idPersona: number): Observable<EntrenamientoRutina[]> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  })
  return this.http.get<EntrenamientoRutina[]>(`${this.apiUrl}/entrenamientos/rutinas/${idPersona}`, { headers: headers })
}

darEntrenamientoRutina(id: number): Observable<EntrenamientoRutina> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  })
  return this.http.get<EntrenamientoRutina>(`${this.apiUrl}/entrenamiento/rutinas/${id}`, { headers: headers })
}

crearEntrenamientoRutina(entrenamiento: EntrenamientoRutina, idPersona: number): Observable<EntrenamientoRutina> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  return this.http.post<EntrenamientoRutina>(`${this.apiUrl}/entrenamientos/rutinas/${idPersona}`, entrenamiento, { headers: headers })
}

editarEntrenamientoRutina(entrenamiento: EntrenamientoRutina): Observable<EntrenamientoRutina> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  return this.http.put<EntrenamientoRutina>(`${this.apiUrl}/entrenamiento/rutinas/${entrenamiento.id}`, entrenamiento, { headers: headers })
}

eliminarEntrenamientoRutina(idEntrenamiento: number): Observable<EntrenamientoRutina> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  return this.http.delete<EntrenamientoRutina>(`${this.apiUrl}/entrenamiento/rutinas/${idEntrenamiento}`, { headers: headers })
}

}
