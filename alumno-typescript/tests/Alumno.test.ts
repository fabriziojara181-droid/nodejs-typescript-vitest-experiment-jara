import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {
  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18, 1001);
    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25, 1002   );
    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17, 1003);
    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("obtenerEstado debe devolver Mayor de edad para un alumno de 18 años", () => {
    const alumno = new Alumno("Juan", 18, 1004);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("obtenerEstado debe devolver Menor de edad para un alumno de 17 años", () => {
    const alumno = new Alumno("Pedro", 17, 1005);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });
});