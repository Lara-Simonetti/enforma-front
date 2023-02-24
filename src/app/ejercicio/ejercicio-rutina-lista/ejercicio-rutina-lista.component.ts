import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rutina } from 'src/app/rutina/rutina';
import { Ejercicio } from "../ejercicio";


@Component({
  selector: 'app-ejercicio-rutina-lista',
  templateUrl: './ejercicio-rutina-lista.component.html',
  styleUrls: ['./ejercicio-rutina-lista.component.css']
})
export class EjercicioRutinaListaComponent implements OnInit {

  @Input() rutinaDetalle: Rutina;
  @Input() ejercicios: Array<Ejercicio>;

  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    )
     { }

  ngOnInit() {
  }

}
