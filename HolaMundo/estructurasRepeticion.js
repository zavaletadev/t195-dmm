/*
Las estructuras de repitición permiten ejecutar la misma 
línea de código hasta que una condición se cumpla

for
while
do while
foreach
map
*/

/*
for (_INICIO_; _CONDICION_; _INCREMENTO_)
*/
// console.log('for incremento');
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log('\n');

// console.log('for decremento');
// for(let i = 5; i > 0; i--) {
//     console.log(i);
// }

/*
while (_CONDICION_)
*/
// console.log('while incremento');
// let i = 0;
// while(i < 5) {
//     console.log(i);
//     //Incremento
//     //i = i + 1;
//     i++;
// }

// console.log('\n');
// console.log('while decremento');
// i = 5;
// while(i > 0) {
//     console.log(i);
//     //Incremento
//     //i = i - 1;
//     i--;
// }

/*
do { _CODIGO_ } while (_CONDICION_)
*/
// console.log('do while incremento');
// let i = 7;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// console.log('\n');

// console.log('do while decremento');
// i = -12;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);

/* COLECCIONES */
const arrNombres = ['Anaí', 'Liliana', 'Alfredo'];
arrNombres.push('Israel');
arrNombres.push('Raúl');

//Mostramos todo el contenido del arreglo
console.log('usando For')
for(let i = 0; i < arrNombres.length; i++) {
    console.log(`[${i}] =>`,arrNombres[i]);
}

//Mostramos el contenido del arreglo usando forEach
/*
_COLECCION_.forEach((_DATO_U_, _INDICE_) => {})
*/
console.log('\n');
console.log('usando forEach')
arrNombres.forEach(
    (nombre, indice) => console.log(`[${indice}] =>`, nombre)
);

/*
_COLECCION_.map((_DATO_U_, _INDICE_) => {})

NOTA: forEach y map ejecutan exactamente el mismo
procedimiento, la única diferencia es que forEach 
no puede retornar valores, y map
PUEDE RETORNAR UN VALOR POR CADA VUELTA
*/
console.log('\n');
console.log('usando map')
arrNombres.map(
    (nombre, indice) => console.log(`[${indice}] =>`, nombre)
);