export class Ejercicio {
    id: number;
    nombre: string;
    descripcion: string;
    video: string;
    calorias: number;
    duracionRutina: number;
    repeticionesRutina: number;


    public constructor(id: number, nombre: string, descripcion:string, video: string, calorias: number, duracionRutina: number, repeticionesRutina: number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.video = video;
        this.calorias = calorias;
        this.duracionRutina = duracionRutina;
        this.repeticionesRutina = repeticionesRutina;
    }
}
