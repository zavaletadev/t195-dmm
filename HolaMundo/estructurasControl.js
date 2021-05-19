/*
Las estructuras de control son los elementos 
que permiten estructurar las condiciones, ciclos, 
colecciones y todos los elementos que conforman
un lenguaje de programación.

Estructuras de JS avanzadas
.forEach
.map

Operadores 
==        Igual a 
===       Identico a (binariamiente igual a)
!=        Diferente a 
!==       Diferente binariamente a
*/

let a = 5; //Numérico
let b = '5'; //Cadena de texto (String)

//Comparación de valores
if (a == b) {
    console.log(a, 'es igual a', b);
    let suma = a + b;
    console.log(`${a} + ${b} =`, suma);
}

if (a != b) {
    console.log(a, 'es diferente de ', b);
}

//Comparación de valores y tipos
if (a === b) {
    console.log('a', 'es identico a', b);
    let suma = a + b;
    console.log(`${a} + ${b} =`, suma);
}

if (a !== b) {
    console.log(`Los tipos de ${a} y ${b} son diferentes`);
    //typeof imprime el tipo de dato de una variable
    console.log('a =', typeof a);
    console.log('b =', typeof b);

    //Conversión de tipos de datos
    //.toString() -------- convierte a cadena de texto
    //parseInt() --------- convierte a entero
    //parseFloat() ------- convierte a decimal
    

    //Convertimos 'a' en string
    a = a.toString();
    console.log('\n');
    console.log('a =', typeof a);
    console.log('b =', typeof b);

    //Convertimos b en int
    console.log('\n');
    b = parseInt(b);

    console.log('a =', typeof a);
    console.log('b =', typeof b);

    a = parseInt(a);
    b = parseInt(b);
    let suma = a + b;
    console.log(`${a} + ${b} =`, suma);
}

let c = 345;

switch(c) {
    case 1 : 
        console.log(`c vale ${c}`);
        break;

    case 2 : 
    console.log(`c vale ${c}`);
        break;
    
    default :
        console.log('Ninguna de las anteriores');
        break;

}









