import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrenadorListaComponent } from './entrenador-lista/entrenador-lista.component';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EntrenadorListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EncabezadoAppModule
  ]
})
export class EntrenadorModule { }
