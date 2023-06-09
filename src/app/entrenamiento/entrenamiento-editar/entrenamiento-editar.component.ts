import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../../persona/persona';
import { PersonaService } from 'src/app/persona/persona.service';
import { Ejercicio } from 'src/app/ejercicio/ejercicio';
import { EjercicioService } from './../../ejercicio/ejercicio.service';
import { EntrenamientoEjercicio } from './../entrenamiento';
import { EntrenamientoService } from '../entrenamiento.service';
import { formatDate } from '@angular/common';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-entrenamiento-editar',
  templateUrl: './entrenamiento-editar.component.html',
  styleUrls: ['./entrenamiento-editar.component.css']
})
export class EntrenamientoEditarComponent implements OnInit {

  persona: Persona;
  entrenamiento: EntrenamientoEjercicio;
  entrenamientoForm: FormGroup;
  ejercicios: Array<Ejercicio>;
  idEjercicio: number;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private ejercicioService: EjercicioService,
    private entrenamientoService: EntrenamientoService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
    ) { }

  ngOnInit() {
    const entrenamientoId = parseInt(this.router.snapshot.params['id']);
    this.entrenamientoService.darEntrenamientoEjercicio(entrenamientoId).subscribe((entrenamiento) => {
      this.entrenamiento = entrenamiento;
      this.ejercicioService.darEjercicios().subscribe((ejercicios) => {
        this.ejercicios = ejercicios;
        this.idEjercicio = Number(entrenamiento.ejercicio);
        this.entrenamientoForm = this.formBuilder.group({
          id: [this.entrenamiento.id, []],
          persona: [this.entrenamiento.persona, []],
          ejercicio: [this.entrenamiento.ejercicio, Validators.required],
          fecha: [formatDate(this.entrenamiento.fecha, 'yyyy-MM-dd', 'en'), [Validators.required, Validators.minLength(10)]],
          tiempo: [this.entrenamiento.tiempo, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
          repeticiones: [Number(this.entrenamiento.repeticiones).toFixed(2), Validators.required]
        });
      });
    });
  }

  editarEntrenamiento(entrenamiento: any): void {
    this.entrenamientoService.editarEntrenamientoEjercicio(entrenamiento).subscribe((entrenamiento) => {
      this.toastr.success("Confirmation", "Entrenamiento editado")
      this.entrenamientoForm.reset();
      this.routerPath.navigate(['/persona/' + this.entrenamiento.persona]);
    },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });
  }

  cancelarEntrenamiento(): void {
    this.entrenamientoForm.reset();
    this.routerPath.navigate(['/persona/' + this.entrenamiento.persona]);
  }

}
