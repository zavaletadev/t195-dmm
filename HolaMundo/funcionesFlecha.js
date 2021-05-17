/*
Una función flecha es una expresión compactada de las funciones 
tradicionales, específicamente para las funciones anónimas

La intención de las "ArrowFunctios" es escribir la menor cantidad 
de código para crear una función

Las funciones flecha reciben su nombre del operador "arrow" que utilizan
para indicar el contenido

_VAR_/_COLECCION_ = (Parametros...) => _CONTENIDO_
Si la fn flecha no retorna mas que una ínea, seguido del op "arrow" se 
escribe el contenido de la función, pero si la función contiene mas de 
de una línea, se utilizan llaves para encerrar el contenido

El return de una función flecha está implícito, eso signfica que, lo que 
se pone delante del op "arrow" (si no hay llaves) es el retorno de la función
*/

const test1 = function () {
    console.log('Hola test1');
}
const test2 = () => console.log('Hola test2');
const test3 = () => {
    console.log('Hola test3');
};

// test1();
// test2();
// test3();

/*
function hola() { 
    console.log('Hola mundo'); 
}
*/

/*
function saludoPersonal(nombre, lugar) {
    console.log(`Hola ${nombre} desde ${lugar}`);
}
*/

/*
function otroSaludo(nom, correo) {
    return `Hola ${nom}, tu email: ${correo}`;
}
*/

/*
function sumaForma1(n1, n2, n3) {
    let suma = n1 + n2 + n3;
    return suma;
}
*/

/*
function sumaForma2(n1, n2, n3) {
    return n1 + n2 + n3;
}
*/

/*
function agregaDireccion(calle, numero, colonia, obj) {
    obj.direccion = {
        calle : calle,
        numero : numero,
        colonia : colonia
    };

    return obj;
}
*/
const hola = () => console.log('Hola Mundo');

const saludoPersonal = (nombre, lugar) => console.log(`Hola ${nombre} desde ${lugar}`);

const otroSaludo = (nom, correo) => `Hola ${nom}, tu email: ${correo}`;

const sumaForma1 = (n1, n2, n3) => {
    let suma = n1 + n2 + n3;
    return suma;
};

const sumaForma2 = (n1, n2, n3) => n1 + n2 + n3;

const agregarDireccion = (calle, numero, colonia, obj) => {
    obj.direccion = {
        calle : calle,
        numero : numero,
        colonia : colonia
    };

    return obj;
}

const agregarMaterias = (mat1, mat2, mat3, mat4, mat5, arr) => {
    arr.push(mat1);
    arr.push(mat2);
    arr.push(mat3);
    arr.push(mat4);
    arr.push(mat5);

    return arr;
}

hola();
saludoPersonal('Lily', 'Qro.');
console.log(otroSaludo('Raúl', 'raul@zavaletazeadev'));
console.log(sumaForma1(1.1, 2.1, 3.1));
console.log(sumaForma1(-4.4, 5.5, -0.6));
console.log(agregarDireccion(
    'Calle 8', 
    22, 
    'Lomas de Qro.', 
    {
        nombre : 'Anaí'
    }
));

//TU INTENTA Arreglo...

//Obj que sume, reste, multiplique y divida con 
//funciones flecha

/*
const operaciones = {
    suma : function (a, b, c) {
        return a +  b + c;
    },
    resta : function (a, b, c) {
        return a - b - c;
    },
    multiplicacion : function (a, b, c) {
        return a * b * c;
    },
    division : function (a, b)  {
        return a / b;
    },
};

const operaciones = { 
    suma : (a, b, c) => a + b + c,
    resta : (a, b, c) => a  - b - c,
    multiplicacion : (a, b, c) => a * b * c,
    division : (a, b) => {
        if (b != 0) {
            return a / b;
        }

        else {
            return 'N/A';
        }
    },
};
*/
const operaciones = { 
    suma : (a, b, c) => a + b + c,
    resta : (a, b, c) => a  - b - c,
    multiplicacion : (a, b, c) => a * b * c,
    division : (a, b) => b !== 0 ? a / b : 'N/A',
};

console.log(operaciones.suma(3, 67, 34));
console.log(operaciones.multiplicacion(3, 67, 34));
console.log(operaciones.division(23, 0));










