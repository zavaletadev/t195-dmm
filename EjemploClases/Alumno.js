import Persona from './Persona.js';

/**
 * Javascript permite la herencia, siendo 
 * unilateral, de esta manera podemos heredar
 * directamente de una sola clase
 */
 class Alumno extends Persona  {
    constructor(matricula, grupo) {
        super();
        this.matricula = matricula;
        this.grupo = grupo;
    }

    mostrarAlumno() {
        this.mostrarPersona();
        console.log(`Mat: ${this.matricula}, Gpo: ${this.grupo}`);
    }
}

/*Para poder utilizar de manera externa 
un elemento de una clase como módulo
debemos importarlo*/
export default Alumno;