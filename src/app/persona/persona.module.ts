import { PersonaTerminarComponent } from './persona-terminar/persona-terminar.component';
import { PersonaReporteComponent } from './persona-reporte/persona-reporte.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { PersonaListaComponent } from './persona-lista/persona-lista.component';
import { PersonaEditarComponent } from './persona-editar/persona-editar.component';
import { PersonaCrearComponent } from './persona-crear/persona-crear.component';
import { EntrenamientoEjercicioPersonaComponent } from '../entrenamiento/entrenamiento-ejercicio-persona/entrenamiento-ejercicio-persona.component';
import { EntrenamientoRutinaPersonaComponent } from '../entrenamiento/entrenamiento-rutina-persona/entrenamiento-rutina-persona.component';

import { PersonaPrincipalComponent } from './persona-principal/persona-principal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    EncabezadoAppModule
  ],
  exports: [
    PersonaListaComponent,
    PersonaDetalleComponent,
    PersonaCrearComponent,
    PersonaEditarComponent,
    EntrenamientoEjercicioPersonaComponent,
    EntrenamientoRutinaPersonaComponent,
    PersonaTerminarComponent,
    PersonaPrincipalComponent
  ],
  declarations: [
    PersonaListaComponent,
    PersonaDetalleComponent,
    PersonaCrearComponent,
    PersonaEditarComponent,
    PersonaReporteComponent,
    EntrenamientoEjercicioPersonaComponent,
    EntrenamientoRutinaPersonaComponent,
    PersonaTerminarComponent,
    PersonaPrincipalComponent
  ]
})
export class PersonaModule { }
