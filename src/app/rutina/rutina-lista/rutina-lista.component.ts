import { Component, OnInit } from '@angular/core';
import { Rutina } from "../rutina";
@Component({
  selector: 'app-rutina-lista',
  templateUrl: './rutina-lista.component.html',
  styleUrls: ['./rutina-lista.component.css']
})
export class RutinaListaComponent implements OnInit {

  elegida: Boolean = false
  rutinaElegida: Rutina

  constructor() { }

  ngOnInit() {
  }

  elegir(rutina: Rutina): void {
    this.elegida = true;
    this.rutinaElegida = rutina;
  }

}