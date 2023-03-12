import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/persona/persona';
import { Rutina } from 'src/app/rutina/rutina';
import { EntrenamientoRutina } from '../entrenamiento';
import { EntrenamientoService } from '../entrenamiento.service';

@Component({
  selector: 'app-entrenamiento-rutina-persona',
  templateUrl: './entrenamiento-rutina-persona.component.html',
  styleUrls: ['./entrenamiento-rutina-persona.component.css']
})
export class EntrenamientoRutinaPersonaComponent implements OnInit {

  @Input() personaDetalle: Persona;
  @Input() entrenamientos: Array<EntrenamientoRutina>;
  public rutinas: EntrenamientoRutina[] = []

  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private entrenamientoService: EntrenamientoService
    )
     { }

  ngOnInit() {
    this.entrenamientoService.darEntrenamientosRutina(this.personaDetalle.id).subscribe(rutinas => {
      this.rutinas = rutinas;
    })
  }

  entrenamientoCrear() {
    this.routerPath.navigate(
      ['/entrenamiento/crear/' + this.personaDetalle.id],
      { queryParams: { tipo: 'rutina' } });
  }

  entrenamientoEditar(idEntrenamiento: number) {
    this.routerPath.navigate(['/entrenamiento/editar/' + idEntrenamiento]);
  }

  entrenamientoEliminar(idEntrenamiento: number) {
    this.entrenamientoService.eliminarEntrenamientoRutina(idEntrenamiento).subscribe((entrenamiento) => {
      this.toastr.success("Confirmation", "Entrenamiento eliminado de la lista")
      window.location.reload();
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else {
        this.toastr.error("Error","Ha ocurrido un error. " + error.message)
      }
    })

  }

}
