import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { RutinaListaComponent } from "./rutina-lista/rutina-lista.component";
import { RutinaDetalleComponent } from "./rutina-detalle/rutina-detalle.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    EncabezadoAppModule
  ],
  exports: [
    RutinaListaComponent,
    RutinaDetalleComponent
  ],
  declarations: [
    RutinaListaComponent,
    RutinaDetalleComponent
  ]

})
export class RutinaModule { }
