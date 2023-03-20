import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ToastrService } from 'ngx-toastr';
import { ROLES } from 'src/app/roles';

@Component({
  selector: 'app-persona-reporte',
  templateUrl: './persona-reporte.component.html',
  styleUrls: ['./persona-reporte.component.css']
})
export class PersonaReporteComponent implements OnInit {

  persona: Persona
  imc: number
  clasificacion: string
  resultados: any

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    const rol = sessionStorage.getItem('rol');
    if (rol === ROLES.entrenador || rol === ROLES.persona) {
      const idPersona = parseInt(this.router.snapshot.params['id']);
      if (idPersona) {
        this.darReporte(idPersona);
      } else {
        this.toastr.error('Error', 'No se ha encontrado al usuario');
        this.routerPath.navigate(['']);
      }
    } else {
      this.toastr.error('Error', 'El Usuario no está autorizado');
      this.routerPath.navigate(['']);
    }

  }

  darReporte(idPersona: number): void {
    this.personaService.darReporte(idPersona).subscribe((reporte) => {
      this.persona = reporte.persona
      this.imc = reporte.imc
      this.clasificacion = reporte.clasificacion_imc
      this.resultados = reporte.resultados
    });
  }

  volver(): void {
    const idPersona = parseInt(this.router.snapshot.params['id']);
    this.routerPath.navigate(['/persona/' + idPersona]);
  }
}
