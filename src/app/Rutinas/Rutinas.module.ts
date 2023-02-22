import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasComponent } from './Rutinas.component';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';

@NgModule({
  imports: [
    CommonModule,
    EncabezadoAppModule
  ],
  declarations: [RutinasComponent],

  exports: [
    RutinasComponent
  ]
})
export class RutinasModule { }
