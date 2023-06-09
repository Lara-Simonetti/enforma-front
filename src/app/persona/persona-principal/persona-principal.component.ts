import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import { catchError, of } from 'rxjs';
import { EntrenamientoService } from 'src/app/entrenamiento/entrenamiento.service';
import { ROLES } from "../../roles";

@Component({
  selector: 'app-persona-principal',
  templateUrl: './persona-principal.component.html',
  styleUrls: ['./persona-principal.component.css']
})
export class PersonaPrincipalComponent implements OnInit {

  public persona: Persona;
  public rutinas = [];
  public ejercicios = [];

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private entrenamientoService: EntrenamientoService
  ) { }

  ngOnInit() {
    const rol = sessionStorage.getItem('rol');
    if (rol !== ROLES.persona) {
      this.toastr.error('Error', 'El Usuario no está autorizado');
      this.routerPath.navigate(['']);
    } else {
      this.detallePersona();
    }
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
          if(persona) {
            this.persona = persona;
          } else {
            this.toastr.error('Error', 'No se ha encontrado al usuario');
            this.routerPath.navigate(['']);
          }
          this.entrenamientoService.darEntrenamientosEjercicio(idUsuario).subscribe(ejercicios => {
            this.ejercicios = ejercicios;
          })
          this.entrenamientoService.darEntrenamientosRutina(idUsuario).subscribe(rutinas => {
            this.rutinas = rutinas;
          })
        });
    } else {
      this.routerPath.navigate(['']);
    }
  }

  personaReporte(idPersona: number): void {
    this.routerPath.navigate(['/persona/reporte/' + idPersona]);
  }
}