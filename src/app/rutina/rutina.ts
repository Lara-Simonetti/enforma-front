import { Ejercicio } from "../ejercicio/ejercicio";
import { EntrenamientoRutina } from "../entrenamiento/entrenamiento";

export class Rutina {

  id: number;
  nombre: string;
  descripcion: string;
  duracionMinutos: number;
  entrenamientos: Array<EntrenamientoRutina>
  ejercicioRutina: Array<Ejercicio>


  public constructor(id: number, nombre: string, descripcion:string, duracionMinutos:number,
    entrenamientos:Array<EntrenamientoRutina>, ejercicioRutina:Array<Ejercicio>) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.duracionMinutos = duracionMinutos;
    this.entrenamientos = entrenamientos;
    this.ejercicioRutina = ejercicioRutina;
  }
}
