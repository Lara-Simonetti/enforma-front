import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { RutinaService } from '../rutina.service';
import { Rutina } from "../rutina";
import { Ejercicio } from 'src/app/ejercicio/ejercicio';
@Component({
  selector: 'app-rutina-lista',
  templateUrl: './rutina-lista.component.html',
  styleUrls: ['./rutina-lista.component.css']
})
export class RutinaListaComponent implements OnInit {

  elegida: Boolean = false
  rutinaElegida: Rutina
  rutinas: Array<Rutina>=[]
  ejerciciosRutina: Array<Ejercicio> = []


  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private rutinaService: RutinaService
  ) { 

  }

  rutinaCrear(): void {
    this.routerPath.navigate(['/rutina/crear/']);
  }

  editarRutina(rutinaId: number): void {
    this.routerPath.navigate(['/rutina/editar/' + rutinaId]);
  }
  ngOnInit() {
    this.rutinaService.darRutinas().subscribe((rutinas) => {

      this.rutinas = rutinas.sort((x, y) => x.nombre.localeCompare(y.nombre));;

      const rutinaId = parseInt(this.router.snapshot.params['id']);
      
      const rutinasFiltradas = rutinas.filter((r: Rutina) => r.id === rutinaId);
      if(rutinasFiltradas.length) this.elegir(rutinasFiltradas[0]);
    })
  }

  elegir(rutina: Rutina): void {
    this.elegida = true;
    this.rutinaElegida = rutina;
  }

}