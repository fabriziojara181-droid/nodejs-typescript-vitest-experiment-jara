export class Alumno {
  constructor(
    public nombre: string,
    public edad: number,
  public legajo: number
  ) {}

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  obtenerEstado(): string {
    if (this.edad >= 18) {
      return "Mayor de edad";
    }

    return "Menor de edad";
  }
}