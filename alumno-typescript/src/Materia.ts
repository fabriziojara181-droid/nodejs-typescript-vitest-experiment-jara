import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
export class Materia {
 constructor(
    public nombre: string,
    public anio: number,
    public carrera: string,
    public titular: Profesor,
    public adjunto: Profesor,
    public alumnos: Alumno[]
  ) {}
}