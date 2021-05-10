//console.log("Hola mundo");

/*
--Comentario de
--varias
--lineas

console
.log(
    "hola mundo"
);
*/

/*
Javascript es un lenguaje de programación 
orientado a objetos / estructurado

Lenguaje de sintaxis dinámica 
(algunas reglas del lenguaje pueden 
omitirse sin generar errores)

ECMAScript6  (ES6) es un estandar de JS que 
contiene diversas reglas de sintaxis, escritura 
y declaración del lenguaje (serie de rreglas epecíficas)
*/

//ES6 recomienda el uso de ";" al final 
//de cada línea de código
// console.log("Hola mundo");
// console.log("Que pasó");
// console.log("sin punto y coma papá");

//ES6 recomienda el uso de apostrofes para 
//la definición de cadenas de texto 
// console.log('Hola mundo');
// console.log('Que pasó');
// console.log('sin punto y coma papá');

/**
 * Javascript es un lenguaje dinámicamente tipado
 * (No tiene tipo de dato explícito), posee una propiedad 
 * de multbilidad
 * 
 * Existen 3 maneras de crear espacios de memoria 
 * (variables / constantes)
 * 
 * var ----------- Estructura clásica de una variable en JS
 *                 NO LA UASES MAS, carece de scoope (contexto)
 * ES6 RECOMIENDA
 * let ----------- Es un espacio variable CON CONTEXTO 
 * const --------- Es un esopacio fijo (NO variable), debe ser definido
 *                 desde su creación
 */
var variable1 = 'Raúl Zavaleta';
// console.log(variable1);

variable1 = 32;
// console.log('Edad', variable1, 'años');

variable1 = 1.78;
//Concatenación de strings con símbolo +
//El resultado es un solo String
// console.log('Estatura', variable1 + ' m.');

//True = Soltero, False = Casado
// variable1 = true;

//Condicional ternario (if de una linea)
var estadoCivil = variable1 ? 'Soltero' : 'Casado';

// console.log('Estaco civíl:', estadoCivil);

/**
 * Template String
 * Es una plnatilla de texto que permite integrar valores dinamicos
 * y texto fijo en una sola cadena
 * 
 * Nompre completo
 * Fecha de nacimiento
 * Edad
 * Matrícula
 */
var nombreCompleto = 'Raúl Zavaleta Zea';
var fechaNacimiento = '29-05-1988';
var edad = 32;
var matricula = '2007313035';

/*
UNIVERSIDAD TECNOLÓGICA DE QUERÉTARO
Raúl Zavaleta
29-05-1988        32 años        2007313037
*/

/**
 * Salto de línea / retorno de carro
 * \n
 * 
 * Tabulador (espacio de 4 posiciones)
 * \t
 */
//console.log('Hola\tmundo\nComo estan todos\thoy');
//EN UN SOLO CONSOLE MOSTRAR LA ESTRUCTURA ARRIBA MENCIONADA
//console.log('UNIVERSIDAD TECNOLÓGICA DE QUERÉTARO\n' + nombreCompleto + '\n' + fechaNacimiento + '\t' +  edad + 'años' + '\t' + matricula);

//Template String usando ${_EXPRESION_}
console.log(`UNIVERSIDAD TECNOLÓGICA DE QUERÉTARO
${nombreCompleto}
${fechaNacimiento}    ${edad} años    ${matricula}`);







