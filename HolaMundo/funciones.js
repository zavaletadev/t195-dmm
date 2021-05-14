/*
una función es un bloque de código relacionado
con una tarea específica, las funciones, pueden 
o no, retornar valores

Pueden también contar con parámetros o carecer
de ellos

Existen 3 formas diferentes de escribir funciones
1.- funciones nombradas (tradicionales)
2.- funciones anónimas
3.- funciones flecha (Arrow Functions)

1.- Las funciones nombradas

Si no retorna nada
function _NOMBRE_ ([_PARAMAS_...]) { }

function _NOMBRE_ ([_PARAMAS_...]) { return _VALOR_ }
*/

function hola() { 
    console.log('Hola mundo'); 
}

//fn con parámetro
function saludoPersonal(nombre, lugar) {
    console.log(`Hola ${nombre} desde ${lugar}`);
}

//fn que retorna un valor
function otroSaludo(nom, correo) {

    /*
    La palabra reservada return indica que 
    esta función retornará un valor como 
    resultado de la función
    */
    return `Hola ${nom}, tu email: ${correo}`;
}

//fn que suma 3 números
function sumaForma1(n1, n2, n3) {
    let suma = n1 + n2 + n3;
    return suma;
}

//fn que suma 3 números
function sumaForma2(n1, n2, n3) {
    return n1 + n2 + n3;
}

//Una función se invoca por su nombre 
//y el uso de paréntesis
//hola();

let nom = 'Raul';
//saludoPersonal(nom, 'Querétaro');

//Si la función tiene return, se puede guardar en una 
//variable/constante
let mensaje = otroSaludo('Jonathan', 'j@gmail.com');
//console.log(mensaje);

let suma1 = sumaForma1(
    1.1, 
    2.5, 
    3.9
);

let suma2 = sumaForma2(
    4.5, 
    5.8, 
    6.8
);

//fn que agrega elementos a un aobjeto
function agregaDireccion(calle, numero, colonia, obj) {
    obj.direccion = {
        calle : calle,
        numero : numero,
        colonia : colonia
    };

    return obj;
}

//Función que agregue 5 materias a un arreglo
function agregaMaterias(mat1, mat2, mat3, mat4, mat5, arr) {

    arr.push(mat1);
    arr.push(mat2);
    arr.push(mat3);
    arr.push(mat4);
    arr.push(mat5);

    return arr;
}


// console.log('suma1 = ', suma1);
// console.log('suma2 = ', suma2);

//Agregar Dirección forma 1
const obj1 = {
    nombre : 'Raúl'
}
//console.log(obj1);
//Añadimos los elementos al objeto por medio de una función
agregaDireccion(
    'Av. Marmota', 
    64, 
    'La Pradera', 
    obj1
);
console.log(obj1);

//Agregar Dirección forma 2
const obj2 = agregaDireccion(
    'Villas del Bajío', 
    68, 
    'Villas Campestre', 
    {
        nombre : 'Israel'
    }
);
console.log(obj2);

//Agregar 5 materias forma1
const arreglo1 = [];
agregaMaterias(
    'AWOI4.0',
    'DMM',
    'I2',
    'EXOYE',
    'FSC3',
    arreglo1
);
console.log(arreglo1);

//Agregar 5 materias forma2
const arreglo2 = agregaMaterias(
    'AWOI4.0',
    'DMM',
    'I2',
    'EXOYE',
    'FSC3',
    []
);
console.log(arreglo2);