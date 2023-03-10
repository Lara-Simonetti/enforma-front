import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageMapperPipe } from 'src/app/custom-pipes/pipes/error-message-mapper.pipe';

@Component({
  selector: 'app-rutina-editar',
  templateUrl: './rutina-editar.component.html',
  styleUrls: ['./rutina-editar.component.css']
})
export class RutinaEditarComponent implements OnInit {


  rutina: Rutina
  rutinaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private rutinaService: RutinaService,
    private errorMessageMapperPipe: ErrorMessageMapperPipe
    ) { }

  ngOnInit() {
    const id = parseInt(this.router.snapshot.params['id'])

    this.rutinaService.darRutina(id).subscribe((rutina) => {
      this.rutina = rutina
      console.log(this.rutina);
      console.log(Number(this.rutina.duracion_minutos));
      this.rutinaForm = this.formBuilder.group({
      id: [this.rutina.id, []],
      nombre: [this.rutina.nombre, [Validators.required, Validators.minLength(2)]],
      descripcion: [this.rutina.descripcion, [Validators.required, Validators.maxLength(300)]],
      duracion_minutos: [this.rutina.duracion_minutos, Validators.required],
      ejercicioRutina: [this.rutina.ejercicioRutina, []]
    });
  });
  }

  editarRutina(rutinaEditada: Rutina): void {
    this.rutinaService.editarRutina(rutinaEditada).subscribe((rutina) => {
      this.toastr.success("Confirmation", "Rutina editada")
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
