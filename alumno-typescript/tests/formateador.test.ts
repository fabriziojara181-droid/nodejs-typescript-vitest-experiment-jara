import {describe ,expect test } from "vitest"  
import { Alumno } from "../src/Alumno"; 
import { Profesor } from "../src/Profesor"; 
import {formateador.} from "../src/Formateador"

describe ("Formateador", ()=> {
    var formateador : formateador;

    beforeEach (()=> {
        formateador = new formateador()
    )};

    test("Formatear nombre de profesor", => {
        var profesor1 = new Profesor ('profesor 1');
        export(formateador.Formatear(profesor1)).tobe('profesor: profesor1');
    }  );

  
});