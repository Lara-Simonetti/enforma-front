import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rutina } from 'src/app/rutina/rutina';
import { Ejercicio } from "../ejercicio";
import { EjercicioService } from '../ejercicio.service';
import { RutinaService } from 'src/app/rutina/rutina.service';


@Component({
  selector: 'app-ejercicio-rutina-lista',
  templateUrl: './ejercicio-rutina-lista.component.html',
  styleUrls: ['./ejercicio-rutina-lista.component.css']
})
export class EjercicioRutinaListaComponent implements OnInit {

  @Input() rutinaDetalle: Rutina;
  @Input() ejercicios: Array<Ejercicio>;
  agregar: boolean;
  ejerciciosDisponibles: Array<Ejercicio>;
  nuevoEjercicio: Ejercicio;

  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private ejercicioService: EjercicioService,
    private rutinaService: RutinaService
    )
     { }

  ngOnInit() {
    this.agregar = false;
    this.ejercicioService.darEjercicios().subscribe((ejercicios) => {
      this.ejerciciosDisponibles = ejercicios;})
  }

  agregarEjercicio() {
    this.agregar = true;
  }

  confirmarEjercicio(ejercicioId: string): void {
    console.log("ejercicio abajo");
    console.log("WHERE ARE YOU")
    var ejercicio = this.ejerciciosDisponibles.find(ejercicio => ejercicio.id = parseInt(ejercicioId))
    this.rutinaDetalle.ejercicioRutina.push(ejercicio);
    console.log(ejercicio);
    console.log("ejercicio^^^");
    this.agregar = false;
    this.rutinaService.editarRutina(this.rutinaDetalle).subscribe((rutina) => {
      this.toastr.success("Confirmation", "El ejercicio fue agregado")
      this.agregar = false;
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
