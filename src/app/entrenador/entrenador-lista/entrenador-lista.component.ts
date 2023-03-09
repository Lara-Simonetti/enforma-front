import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-entrenador-lista',
  templateUrl: './entrenador-lista.component.html',
  styleUrls: ['./entrenador-lista.component.css']
})
export class EntrenadorListaComponent {

  entrenadores: Array<Entrenador>=[{
    id: 1,
    nombre: 'David',
    apellido: 'Borrero'
  },{
    id: 2,
    nombre: 'Lara',
    apellido: 'Simonetti'
  },{
    id: 3,
    nombre: 'Santiago',
    apellido: 'Cortes'
  },{
    id: 4,
    nombre: 'Lina',
    apellido: 'Sierra'
  }]
  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private entrenadorService: EntrenadorService
  ) { }

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
