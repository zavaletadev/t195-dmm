/*
Tanto let, como var y const permiten el tipado dinámico, solo que 
let y var son mutables, const NO lo es

Varibles y constantes
Variable = espacio reservado de memoria que almacena un valor y 
           este puede cambiar, puede inicializarse o no.

Constante = espacio de memoria reservado y etiquetado con un valor
            que no puede cambiar, pues en memoria se almacena tanto 
            el nombre de la constante como el valor (usa menos recursos).
*/

//NO MAS, ÚLTIMA VEZ
var var1 = 1;

/*
Let contiene las mismas prpiedads que una variable, con la 
diferencia de usar el contexto para ubicar su valor semanticamente
*/
let var2 = 2;

//Condicion solo de ejemplo si verdadero es verdadero
if(true) {
    var var1 = 3;
    let var2 = 4;

    if (true) {
        var var1 = 5;
        let var2 = 6;
        // console.log('Var1 en segundo if =', var1);
        // console.log('Var2 en segundo if =', var2);
    }
    // console.log('Var1 en if =', var2);
    // console.log('Var2 en if =', var2);
}

console.log('Var1 =',var1);
console.log('Var2 =',var2);

/* +++++++++++++++++ ADIOS VAR +++++++++++++++++ */

let nombre;
nombre = 'Raúl Zavaleta';

//Constantes
const nombre2 = 'Jonathan R. Zea';
console.log(nombre2);



