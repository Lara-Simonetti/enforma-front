import { Persona } from './../persona/persona';
import { Ejercicio } from './../ejercicio/ejercicio';
import { Rutina } from '../rutina/rutina';

export class EntrenamientoEjercicio {
    id: number;
    ejercicio: Ejercicio;
    persona: Persona;
    tiempo: string;
    repeticiones: number;
    fecha: Date;

    public constructor(id: number, ejercicio: Ejercicio, persona: Persona, tiempo: string, repeticiones: number, fecha: Date) {
        this.id = id;
        this.ejercicio = ejercicio;
        this.persona = persona;
        this.tiempo = tiempo;
        this.repeticiones = repeticiones;
        this.fecha = fecha;
    }

}

export class EntrenamientoRutina {
  id: number;
  rutina: Rutina;
  persona: Persona;
  tiempo: string;
  fecha: Date;

  public constructor(id: number, rutina: Rutina, persona: Persona, tiempo: string, fecha: Date) {
      this.id = id;
      this.rutina = rutina;
      this.persona = persona;
      this.tiempo = tiempo;
      this.fecha = fecha;
  }

}
