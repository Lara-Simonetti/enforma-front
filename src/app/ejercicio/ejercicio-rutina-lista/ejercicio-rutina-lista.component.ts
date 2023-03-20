import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rutina } from 'src/app/rutina/rutina';
import { Ejercicio } from "../ejercicio";
import { EjercicioService } from '../ejercicio.service';
import { RutinaService } from 'src/app/rutina/rutina.service';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';


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
    private rutinaService: RutinaService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
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

  confirmarEjercicio(ejercicioName: string): void {
    let ejercicio = {} as Ejercicio
    for(var i = 0; i<=this.ejerciciosDisponibles.length; i++){
      if(ejercicioName == this.ejerciciosDisponibles[i].nombre){
        ejercicio = this.ejerciciosDisponibles[i];
        break
      }
    }
    let ejercicios = this.rutinaDetalle.ejercicioRutina;
    ejercicios.push(ejercicio);
    this.agregar = false;
    this.rutinaService.editarRutina(this.rutinaDetalle).subscribe((rutina) => {
      this.toastr.success("Confirmation", "El ejercicio fue agregado")
      this.agregar = false;
      },
      error => {
        this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
      });
  }

}
