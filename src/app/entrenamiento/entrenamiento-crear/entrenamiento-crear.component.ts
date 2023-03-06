import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../../persona/persona';
import { PersonaService } from 'src/app/persona/persona.service';
import { Ejercicio } from 'src/app/ejercicio/ejercicio';
import { EjercicioService } from './../../ejercicio/ejercicio.service';
import { EntrenamientoEjercicio, EntrenamientoRutina } from './../entrenamiento';
import { EntrenamientoService } from '../entrenamiento.service';
import { Rutina } from 'src/app/rutina/rutina';
import { RutinaService } from 'src/app/rutina/rutina.service';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-entrenamiento-crear',
  templateUrl: './entrenamiento-crear.component.html',
  styleUrls: ['./entrenamiento-crear.component.css']
})

export class EntrenamientoCrearComponent implements OnInit {

  persona: Persona;
  entrenamientoForm: FormGroup;
  ejercicios: Array<Ejercicio>;
  rutinas: Array<Rutina>;
  tipo: string;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private ejercicioService: EjercicioService,
    private entrenamientoService: EntrenamientoService,
    private rutinaService: RutinaService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
    ) { }

  obtenerTipo() {
    this.router.queryParams.subscribe(params => {
      this.tipo = params['tipo'] ?? 'ejercicio';
      this.definirFormulario();
    });
  }


  ngOnInit() {
    const personaId = parseInt(this.router.snapshot.params['idPersona']);
    this.personaService.darPersona(personaId).subscribe((persona) => {
      this.persona = persona;
      this.obtenerTipo();
    });
  }

  definirFormulario() {
    if (this.tipo === 'ejercicio') {
      this.ejercicioService.darEjercicios().subscribe((ejercicios) => {
        this.ejercicios = ejercicios;
        this.entrenamientoForm = this.formBuilder.group({
          idPersona: this.persona.id,
          ejercicio: [Validators.required],
          fecha: [new Date(), [Validators.required, Validators.minLength(10)]],
          tiempo: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
          repeticiones: ["", Validators.required],
        });
      });
    }
    else if (this.tipo === 'rutina') {
      this.rutinaService.darRutinas().subscribe((rutinas) => {
        this.rutinas = rutinas;
        this.entrenamientoForm = this.formBuilder.group({
          idPersona: this.persona.id,
          rutina: [Validators.required],
          fecha: [new Date(), [Validators.required, Validators.minLength(10)]],
          tiempo: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        });
      });
    }
  }

  crearEntrenamiento(entrenamientoFormGroup: FormGroup) {
    if (this.tipo === 'ejercicio') this.crearEntrenamientoEjercicio(entrenamientoFormGroup.value);
    else if (this.tipo === 'rutina') this.crearEntrenamientoRutina(entrenamientoFormGroup.value);
  }

  crearEntrenamientoEjercicio(entrenamiento: EntrenamientoEjercicio): void {
    this.entrenamientoService.crearEntrenamientoEjercicio(entrenamiento, this.persona.id).subscribe((entrenamiento) => {
      this.toastr.success("Confirmation", "Entrenamiento creado")
      this.entrenamientoForm.reset();
      this.routerPath.navigate(['/persona/' + this.persona.id]);
    },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });
  }

  crearEntrenamientoRutina(entrenamiento: EntrenamientoRutina): void {
    this.entrenamientoService.crearEntrenamientoRutina(entrenamiento, this.persona.id).subscribe((entrenamiento) => {
      this.toastr.success("Confirmation", "Entrenamiento creado")
      this.entrenamientoForm.reset();
      this.routerPath.navigate(['/persona/' + this.persona.id]);
    },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });
  }

  cancelarEntrenamiento(): void {
    const personaId = parseInt(this.router.snapshot.params['idPersona']);
    this.entrenamientoForm.reset();
    this.routerPath.navigate(['/persona/' + personaId]);
  }

}
