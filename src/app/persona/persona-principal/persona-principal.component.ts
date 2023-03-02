import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-persona-principal',
  templateUrl: './persona-principal.component.html',
  styleUrls: ['./persona-principal.component.css']
})
export class PersonaPrincipalComponent implements OnInit {

  persona: Persona;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.detallePersona();
  }

  detallePersona(): void {
    const idUsuario = parseInt(sessionStorage.getItem('idUsuario'));
    if (idUsuario) {
      this.personaService.darPersona(idUsuario)
        .pipe(
          catchError((error) => {
            return of(null);
          })
        ).subscribe((persona) => {
          if(persona) this.persona = persona;
          else this.routerPath.navigate(['']);
        });
    } else {
      this.routerPath.navigate(['']);
    }
  }

  personaReporte(idPersona: number): void {
    this.routerPath.navigate(['/persona/reporte/' + idPersona]);
  }
}