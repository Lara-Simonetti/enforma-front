import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ejercicio } from './../ejercicio';
import { EjercicioService } from '../ejercicio.service';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-ejercicio-lista',
  templateUrl: './ejercicio-lista.component.html',
  styleUrls: ['./ejercicio-lista.component.css']
})
export class EjercicioListaComponent implements OnInit {

  ejercicios: Array<Ejercicio>=[]
  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private ejercicioService: EjercicioService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
  ) { }

  ejercicioCrear(): void {
    this.routerPath.navigate(['/ejercicio/crear/']);
  }

  ejercicioEditar(ejercicioId: number): void {
    this.routerPath.navigate(['/ejercicio/editar/' + ejercicioId]);
  }

  ejercicioEliminar(ejercicioId: number): void {
    this.ejercicioService.eliminarEjercicio(ejercicioId).subscribe((ejercicio) => {
      this.toastr.success("Confirmation", "Ejercicio eliminado")
      window.location.reload();
      },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });

  }

  ngOnInit() {
    this.ejercicioService.darEjercicios().subscribe((ejercicios) => {
      this.ejercicios = ejercicios;
    })
  }

}
