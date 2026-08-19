import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {
  test("debe crear un profesor con nombre y legajo", () => {
    const profesor = new Profesor("Carlos", 2001);

    expect(profesor.nombre).toBe("Carlos");
    expect(profesor.legajo).toBe(2001);
  });
});