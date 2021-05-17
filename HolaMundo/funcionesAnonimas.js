/*
Una función anónima es quella que carece de 
identificador y normamente se almacena en una variable 
o colección, esta técnica se utiliza cuando necesitamos 
almacenar funciones para transportarlas

_VAR_/_OBJ_ = function () {};
*/

/*
function hola() { 
    console.log('Hola mundo'); 
}
*/
const hola = function () {
    console.log('Hola mundo');
};

/*
function saludoPersonal(nombre, lugar) {
    console.log(`Hola ${nombre} desde ${lugar}`);
}
*/
const saludoPersonal = function (nombre, lugar) {
    console.log(`Hola ${nombre} desde ${lugar}`);
}

/*Para invocar una función anónimas, mandas llamar a la 
variable/constante/colección con paréntesis*/
// hola();
// saludoPersonal('Raúl', 'Qro. Qro. México');

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

/*
function agregaMaterias(mat1, mat2, mat3, mat4, mat5, arr) {

    arr.push(mat1);
    arr.push(mat2);
    arr.push(mat3);
    arr.push(mat4);
    arr.push(mat5);

    return arr;
}
*/

/*
Las funciones anónimas pueden transportarde en const/variables 
o colecciones
*/
const objFunciones = {
    hola : hola,
    saludoPersonal : saludoPersonal,
    otroSaludo : function (nom, correo) {
        return `Hola ${nom}, tu email: ${correo}`;
    }, 
    sumaForma1 : function (n1, n2, n3) {
        let suma = n1 + n2 + n3;
        return suma;
    },
    sumaForma2 : function (n1, n2, n3) {
        return n1 + n2 + n3;
    }, 
    agregarDireccion : function (calle, numero, colonia, obj) {
        obj.direccion = {
            calle : calle,
            numero : numero,
            colonia : colonia
        };
    
        return obj;
    },
    agregaMaterias : function (mat1, mat2, mat3, mat4, mat5, arr) {

        arr.push(mat1);
        arr.push(mat2);
        arr.push(mat3);
        arr.push(mat4);
        arr.push(mat5);
    
        return arr;
    }
};

objFunciones.hola();
objFunciones.saludoPersonal('Jonathan', 'Corregidora, Qro.');

// const saludo = objFunciones.otroSaludo('Anaí', 'anai@me.com');
// console.log(saludo);
console.log(objFunciones.otroSaludo('Anaí', 'anai@me.com'));

console.log(
    'SumaForma1', 
    objFunciones.sumaForma1(
        1.1, 
        2.2, 
        3.3
    )
);

console.log('SumaFroma2', objFunciones.sumaForma2(4.4, 5.5, 6.6));

// const persona = { 
//     nombre : 'Anaí'
// };
// objFunciones.agregarDireccion(
//     'Azabache 632', 
//     62, 
//     'Paseos del Pedregal', 
//     persona
// );

const persona = objFunciones.agregarDireccion(
    'Azabache 632', 
    62, 
    'Paseos del Pedregal', 
    {
        nombre : 'Anaí'
    }
);
console.log(persona);

const materias = objFunciones.agregaMaterias(
    'AWOI4.0',
    'DMM',
    'I2',
    'EXOYE',
    'FSC3',
    []
);
console.log(materias);














