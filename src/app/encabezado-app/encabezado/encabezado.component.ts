import { Component, OnInit } from '@angular/core';
import { ROLES } from 'src/app/roles';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public rol = ''
  public entrenador = false
  constructor() { }

  ngOnInit() {
    this.rol = sessionStorage.getItem('rol');
    if(this.rol === ROLES.entrenador){
      this.entrenador = true;
    }
  }

}
