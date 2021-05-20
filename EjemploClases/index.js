/*
JS en ES6 nos permite importar elementos
desde otro archivos
import _NOMBRE_ELE_ from '_RUTA_RELATIVA_';

NOTA: Para que funcione el import de elementos
debemos indicar que esta carpeta utilizará 
modularización de ES6 y debemos indicar
quien es el archivo que lo inicializa todo (main)
generamos un archivo package.json para indicar
lo anterior

Si el elemento que se invoca es el elemento default, 
solo se manda llamar, pero si el elemento que se invoca
no es default, debe agregarse entre llaves
*/

import Persona, {Transformer, Objeto} from './Persona.js';
import Alumno from './Alumno.js';
/*
Creamos una instancia de la clase persona
*/
const per1 = new Persona();
per1.nombre = 'Raul';
per1.edad = 32;
per1.mostrarPersona();

const alum1 = new Alumno('2007313035', 'T-94');
alum1.nombre = 'Jonathan';
alum1.edad = 18;
alum1.mostrarAlumno();

const transf1 = new Transformer('AutoBot', 'Vocho');
transf1.mostrarTransformer();

const obj1 = new Objeto();
