import { Component, OnInit } from '@angular/core';
import { Rutina } from "../rutina";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RutinaService } from '../rutina.service';
@Component({
  selector: 'app-rutina-lista',
  templateUrl: './rutina-lista.component.html',
  styleUrls: ['./rutina-lista.component.css']
})
export class RutinaListaComponent implements OnInit {

  elegida: Boolean = false
  rutinaElegida: Rutina
  rutinas: Array<Rutina>=[]


  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private rutinaService: RutinaService
  ) { 

  }

  rutinaCrear(): void {
    this.routerPath.navigate(['/rutina/crear/']);
  }

  ngOnInit() {
    this.rutinaService.darRutinas().subscribe((rutinas) => {
      this.rutinas = rutinas.sort((x, y) => x.nombre.localeCompare(y.nombre));;
    })
  }

  elegir(rutina: Rutina): void {
    this.elegida = true;
    this.rutinaElegida = rutina;
  }

}