import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-entrenador-lista',
  templateUrl: './entrenador-lista.component.html',
  styleUrls: ['./entrenador-lista.component.css']
})
export class EntrenadorListaComponent implements OnInit {

  entrenadores: Array<Entrenador>=[]

  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private entrenadorService: EntrenadorService
  ) { }

  ngOnInit(): void {
    this.entrenadorService.darEntrenadores().subscribe((res) => {
      this.entrenadores = res;
      this.toastr.success("Confirmation", "Lista de entrenadores obtenida");
    })
  }

  entrenadorCrear(): void {
    alert('Create trainer')
  }

  entrenadorEditar(entrenadorId: number): void{
    alert(entrenadorId)
  }

  entrenadorEliminar(entrenadorId: number): void{
    alert(entrenadorId)
  }

}
