import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ejercicio } from './../ejercicio';
import { EjercicioService } from './../ejercicio.service';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-ejercicio-crear',
  templateUrl: './ejercicio-crear.component.html',
  styleUrls: ['./ejercicio-crear.component.css']
})
export class EjercicioCrearComponent implements OnInit {

  ejercicioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private ejercicioService: EjercicioService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
  ) { }

  ngOnInit() {
    this.ejercicioForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      descripcion: ["", [Validators.required, Validators.maxLength(100)]],
      video: ["", [Validators.required, Validators.minLength(2)]],
      calorias: ["", Validators.required]
    });
  }

  crearEjercicio(ejercicio: Ejercicio): void {
    this.ejercicioService.crearEjercicio(ejercicio).subscribe((ejercicio) => {
      this.toastr.success("Confirmation", "Ejercicio creado")
      this.ejercicioForm.reset();
      this.routerPath.navigate(['/ejercicio']);
      },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });
  }

  cancelarEjercicio(): void {
    this.ejercicioForm.reset();
    this.routerPath.navigate(['/ejercicio']);
  }

}
