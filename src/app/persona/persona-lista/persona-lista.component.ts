import { EntrenamientoService } from './../../entrenamiento/entrenamiento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EntrenamientoEjercicio, EntrenamientoRutina } from 'src/app/entrenamiento/entrenamiento';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-persona-lista',
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.css']
})
export class PersonaListaComponent implements OnInit {


  personas:Array<Persona> = []
  elegida: Boolean = false
  personaElegida: Persona
  entrenamientosEjercicio: Array<EntrenamientoEjercicio> = []
  entrenamientosRutina: Array<EntrenamientoRutina> = []

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private entrenamientoService: EntrenamientoService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
    ) { }

  darPersonas(): void {
  }

  elegir(persona: Persona): void {
    this.entrenamientoService.darEntrenamientosEjercicio(persona.id).subscribe((entrenamientos) => {
      this.elegida = true;
      this.personaElegida = persona;
      this.entrenamientosEjercicio = entrenamientos;
    });
    this.entrenamientoService.darEntrenamientosRutina(persona.id).subscribe((entrenamientos) => {
      this.entrenamientosRutina = entrenamientos;
    });
  }

  personaCrear(): void {
    this.routerPath.navigate(['/persona/crear/']);
  }

  personaEditar(idPersona: number): void {
    this.routerPath.navigate(['/persona/editar/' + idPersona]);
  }

  personaEliminar(idPersona: number): void {
    this.personaService.eliminarPersona(idPersona).subscribe((persona) => {
      this.toastr.success("Confirmation", "Persona eliminada de la lista")
      this.ngOnInit();
    },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });;
  }

  personaReporte(idPersona: number): void {
    this.routerPath.navigate(['/persona/reporte/' + idPersona]);
  }

  personaTerminar(idPersona: number): void {
    this.routerPath.navigate(['/persona/terminar/' + idPersona]);
  }

  ngOnInit() {
    this.personaService.darPersonas().subscribe((personas) => {
      this.personas = personas;
      const personaId = parseInt(this.router.snapshot.params['id']);
      if(!(personaId==null)) {
        for(let i=0;i<this.personas.length;i++) {
          if(this.personas[i].id==personaId) {
            this.entrenamientoService.darEntrenamientosEjercicio(personaId).subscribe((entrenamientos) => {
              this.elegida = true;
              this.personaElegida = this.personas[i];
              this.entrenamientosEjercicio = entrenamientos;
            });
            this.entrenamientoService.darEntrenamientosRutina(personaId).subscribe((entrenamientos) => {
              this.entrenamientosRutina = entrenamientos;
            });
          }
        }
      }
    })
  }
}
