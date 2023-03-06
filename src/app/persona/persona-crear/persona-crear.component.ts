import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-persona-crear',
  templateUrl: './persona-crear.component.html',
  styleUrls: ['./persona-crear.component.css']
})
export class PersonaCrearComponent implements OnInit {

  personaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private personaService: PersonaService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
    ) { }

  ngOnInit() {
    this.personaForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      apellido: ["", [Validators.required, Validators.minLength(2)]],
      talla: ["", Validators.required],
      peso: ["", Validators.required],
      edad: ["", Validators.required],
      ingreso: ["", [Validators.required, Validators.minLength(10)]],
      brazo: ["", Validators.required],
      pecho: ["", Validators.required],
      cintura: ["", Validators.required],
      pierna: ["", Validators.required],
      entrenando: true,
      razon: "",
      terminado: "1900-01-01"
    });
  }

  crearPersona(persona: Persona): void {
    this.personaService.crearPersona(persona).subscribe((persona) => {
      this.toastr.success("Confirmation", "Persona creada")
      this.personaForm.reset();
      this.routerPath.navigate(['/persona/' + persona.id]);
    },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });

  }

  cancelarPersona(): void {
    this.personaForm.reset();
    this.routerPath.navigate(['/persona']);
  }

}
