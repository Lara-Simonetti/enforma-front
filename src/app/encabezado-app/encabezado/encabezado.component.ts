import { Component, OnInit } from '@angular/core';
import { ROLES } from 'src/app/roles';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public rol: string;
  public entrenador: boolean = false
  public persona: boolean = false

  constructor() { }

  ngOnInit() {
    this.rol = sessionStorage.getItem('rol');
    this.entrenador = this.rol === ROLES.entrenador;
    this.persona = this.rol === ROLES.persona;
  }

}
