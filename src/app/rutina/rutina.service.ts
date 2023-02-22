import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

}
