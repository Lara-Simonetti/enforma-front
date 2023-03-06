import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ejercicio } from './../ejercicio';
import { EjercicioService } from '../ejercicio.service';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-ejercicio-editar',
  templateUrl: './ejercicio-editar.component.html',
  styleUrls: ['./ejercicio-editar.component.css']
})
export class EjercicioEditarComponent implements OnInit {

  ejercicio: Ejercicio;
  ejercicioForm: FormGroup;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private ejercicioService: EjercicioService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
    ) { }

  ngOnInit() {
    const id = parseInt(this.router.snapshot.params['id']);
    this.ejercicioService.darEjercicio(id).subscribe((ejercicio) => {
      this.ejercicio = ejercicio
      this.ejercicioForm = this.formBuilder.group({
      id: [this.ejercicio.id, []],
      nombre: [this.ejercicio.nombre, [Validators.required, Validators.minLength(2)]],
      descripcion: [this.ejercicio.descripcion, [Validators.required, Validators.maxLength(100)]],
      video: [this.ejercicio.video, [Validators.required, Validators.minLength(2)]],
      calorias: [Number(this.ejercicio.calorias).toFixed(2), [Validators.required]]
      });
    });

  }

  editarEjercicio(ejercicio: Ejercicio): void {
    this.ejercicioService.editarEjercicio(ejercicio).subscribe((ejercicio) => {
      this.toastr.success("Confirmation", "Ejercicio editado")
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
