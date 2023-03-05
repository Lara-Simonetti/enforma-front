import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/persona/persona';
import { EntrenamientoEjercicio } from '../entrenamiento';
import { EntrenamientoService } from '../entrenamiento.service';

@Component({
  selector: 'app-entrenamiento-persona-lista',
  templateUrl: './entrenamiento-persona-lista.component.html',
  styleUrls: ['./entrenamiento-persona-lista.component.css']
})
export class EntrenamientoPersonaListaComponent implements OnInit {

  @Input() personaDetalle: Persona;
  @Input() entrenamientos: Array<EntrenamientoEjercicio>;

  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private entrenamientoService: EntrenamientoService
    )
     { }

  ngOnInit() {
  }

  entrenamientoCrear() {
    this.routerPath.navigate(
      ['/entrenamiento/crear/' + this.personaDetalle.id],
      { queryParams: { tipo: 'ejercicio' } });
  }

  entrenamientoEditar(idEntrenamiento: number) {
    this.routerPath.navigate(['/entrenamiento/editar/' + idEntrenamiento]);
  }

  entrenamientoEliminar(idEntrenamiento: number) {
    this.entrenamientoService.eliminarEntrenamientoEjercicio(idEntrenamiento).subscribe((entrenamiento) => {
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
