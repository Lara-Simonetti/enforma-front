import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { CustomPipesModule } from "./custom-pipes/custom-pipes.module";
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { PersonaModule } from './persona/persona.module';
import { EjercicioModule} from './ejercicio/ejercicio.module';
import { EntrenamientoModule } from './entrenamiento/entrenamiento.module';
import { RutinaModule } from "./rutina/rutina.module";
import { EntrenadorModule } from './entrenador/entrenador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule,
    UsuarioModule,
    PersonaModule,
    EjercicioModule,
    EntrenamientoModule,
    RutinaModule,
    EntrenadorModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
