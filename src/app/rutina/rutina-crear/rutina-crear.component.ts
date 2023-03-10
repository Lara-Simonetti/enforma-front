import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rutina } from './../rutina';
import { RutinaService } from './../rutina.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-rutina-crear',
  templateUrl: './rutina-crear.component.html',
  styleUrls: ['./rutina-crear.component.css']
})
export class RutinaCrearComponent implements OnInit {

  rutinaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private rutinaService: RutinaService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
    ) { }

  ngOnInit() {
    this.rutinaForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      descripcion: ["", [Validators.required, Validators.maxLength(300)]],
      duracion_minutos: [0, Validators.required]
    });
  }

  crearRutina(rutina: Rutina): void {
    this.rutinaService.crearRutina(rutina).subscribe((rutina) => {
      this.toastr.success("Confirmation", "Rutina creada")
      this.rutinaForm.reset();
      this.routerPath.navigate(['/rutina']);
      },
    error => {
      this.toastr.error("Error", this.errorMessageMapperPipe.transform(error));
    });

  }

  cancelarRutina(): void {
    this.rutinaForm.reset();
    this.routerPath.navigate(['/rutina']);
  }

}
