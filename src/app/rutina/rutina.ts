import { Ejercicio } from "../ejercicio/ejercicio";
import { Entrenamiento } from "../entrenamiento/entrenamiento";

export class Rutina {

  id: number;
  nombre: string;
  descripcion: string;
  entrenamientos: Array<Entrenamiento>
  ejercicioRutina: Array<Ejercicio>


  public constructor(id: number, nombre: string, descripcion:string,
    entrenamientos:Array<Entrenamiento>, ejercicioRutina:Array<Ejercicio>) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.entrenamientos = entrenamientos;
    this.ejercicioRutina = ejercicioRutina;
  }
}
