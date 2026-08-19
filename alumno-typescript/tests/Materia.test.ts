import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";
import { Profesor } from "../src/Profesor";
import { Alumno } from "../src/Alumno";

describe("Materia", () => {
  test("debe crear una materia con profesores y alumnos", () => {
    const titular = new Profesor("Carlos", 2001);
    const adjunto = new Profesor("Laura", 2002);

    const alumno1 = new Alumno("Juan", 18, 1001);
    const alumno2 = new Alumno("Pedro", 17, 1002);

    const materia = new Materia(
      "Paradigmas de Programacion",
      2,
      "Programacion",
      titular,
      adjunto,
      [alumno1, alumno2]
    );

    expect(materia.nombre).toBe("Paradigmas de Programacion");
    expect(materia.anio).toBe(2);
    expect(materia.carrera).toBe("Programacion");
    expect(materia.titular).toBe(titular);
    expect(materia.adjunto).toBe(adjunto);
    expect(materia.alumnos).toHaveLength(2);
  });
});