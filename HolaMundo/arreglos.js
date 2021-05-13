/*
Un arreglo es una colección de valores, generalmente del mismo
tipo de dato
En JS los arreglos son de tipado y tamaño dinámico

Existen 3 formas de inicializar una arreglo
*/

//inicializar el tamaño del arreglo (sin valores)
const arr1 = new Array(5); 

//Inicializar el arreglo con sus valores por medio de la clase 
//Array
const arr2 = new Array(
    'Raúl Zavaleta Zea', 
    33, 
    '1988-05-29', 
    '2007313035'
);

//Inicializar el arreglo por medio de un arreglo vacío 
//(sin tamaño ni contenido)
const arr3 = [];

// console.log('arr1=', arr1);
// console.log('arr2=', arr2);
// console.log('arr3=', arr3);

//La propiedad length de una arreglo indica el numero
//de elementos que contiene la colección
// console.log('arr1.length=', arr1.length);
// console.log('arr2.length=', arr2.length);
// console.log('arr3.length=', arr3.length);

/*
Para agregar elementos a un arreglo utilizamos el método
push (siempre agrega al final)
_ARR_.push(_VALOR_);
*/
arr1.push('T-195');
arr2.push('T-196');
arr3.push('T-94');
arr3.push('ZAZR880529HDFVXL08');
arr3.push('ZAZR880529GB5');

//Operador de propagación (clonamos el contenido de arr3 en arr4)
const arr4 = [...arr3];

arr4.push('google.com.mx');

/*
El método unshift permite agregar un elemento 
al arreglo, en la pos 1, (indice 0) recorriendo a todos 
los demás elementos
*/
arr1.unshift('#21-01');
arr2.unshift('#21-02');
arr3.unshift('#21-03');

/*
Al ser una colección, los arreglo permiten 
manipular directamente una posición por medio de 
su índice
_ARR_[_INDICE_]
*/

/*
Modificamos el segundo elemento de un arreglo, solo con el nombre
*/
arr1[1] = 'RAUL';
arr2[1] = 'RAUL';
arr3[1] = 'RAUL';

/*
Para eliminar un elemento de una arreglo
shift ----- inicio
pop ------- final
slice ----- Pos. determianda
*/

console.log('arr1=', arr1);
console.log('arr2=', arr2);
console.log('arr3=', arr3);
console.log('arr4=', arr4);

console.log('arr1.length=', arr1.length);
console.log('arr2.length=', arr2.length);
console.log('arr3.length=', arr3.length);
console.log('arr4.length=', arr4.length);

//Eliminamos la ultima pos del arreglo
arr1.pop();

//Eliminamos la primera pos  del arreglo
arr2.shift();

//Eliminamos una pos específica del arreglo
//_ARR_.splice(_INDICE_INI_, _CANTIDAD_);
//Eliminamos la segunda pos (solo la segunda)
arr3.splice(1, 1);

console.log('arr1=', arr1);
console.log('arr2=', arr2);
console.log('arr3=', arr3);
console.log('arr4=', arr4);

console.log('arr1.length=', arr1.length);
console.log('arr2.length=', arr2.length);
console.log('arr3.length=', arr3.length);
console.log('arr4.length=', arr4.length);

/*
De la misma manera que usamos spread en los aobjetos
aplica para los arreglo, ambas estructuras utilizan
hoy linking (siempre estan unidos), por ello, si 
necesitas crear una rreglo a partir de otro NO LO IGUALES
const arr5 = arr3 //INCORRECTO, LO QUE PASE EN ARR3, SE REPETIRÁ EN ARR5
const arr5 = [...arr3] //CORRECTO, SE CLONA EL CONTENIDO DE ARR3 EN UNA ESTRUCTURA COMPLETAMENTE NUEVA
*/


