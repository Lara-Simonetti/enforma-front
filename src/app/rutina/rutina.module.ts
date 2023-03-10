import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { RutinaListaComponent } from "./rutina-lista/rutina-lista.component";
import { RutinaDetalleComponent } from "./rutina-detalle/rutina-detalle.component";
import { RutinaCrearComponent } from "./rutina-crear/rutina-crear.component";
import { RutinaEditarComponent } from './rutina-editar/rutina-editar.component';
import { EjercicioRutinaListaComponent } from '../ejercicio/ejercicio-rutina-lista/ejercicio-rutina-lista.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    EncabezadoAppModule
  ],
  exports: [
    RutinaListaComponent,
    RutinaDetalleComponent,
    RutinaCrearComponent,
    RutinaEditarComponent,
    EjercicioRutinaListaComponent
  ],
  declarations: [
    RutinaListaComponent,
    RutinaDetalleComponent,
    RutinaCrearComponent,
    RutinaEditarComponent,
    EjercicioRutinaListaComponent
  ]

})
export class RutinaModule { }
