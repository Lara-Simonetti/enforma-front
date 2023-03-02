import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-persona-principal',
  templateUrl: './persona-principal.component.html',
  styleUrls: ['./persona-principal.component.css']
})
export class PersonaPrincipalComponent implements OnInit {

  persona: Persona;

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.detallePersona();
  }

  detallePersona(): void {
    const idUsuario = parseInt(sessionStorage.getItem('idUsuario'));
    if (idUsuario) {
      this.personaService.darPersona(idUsuario).subscribe((persona) => {
        console.log(persona);
        this.persona = persona;
      });
    } else {
      this.routerPath.navigate(['']);
    }
  }
}