import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    EncabezadoAppModule
  ],
  exports: [

  ],
  declarations: [

  ]

})
export class RutinaModule { }
