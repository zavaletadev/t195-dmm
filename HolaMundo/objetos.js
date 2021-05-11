/*
Un objeto es una colección de
datos almacenada en una unica
estructura, que es infinitamente
ramificable de tipado dinámico

_OBJ_ = {
    '_CLAVE_' : _VALOR_
}
*/
const obj1 = {
    'nombre' : 'Raul Z.',
    'edad' : 32,
    'estatura' : 1.7
};

//Imprime todo el objeto
//console.log(obj1);

/*
Para acceder a cada valor individualmente:
_OBJ_._CLAVE_
_OBJ_['_CLAVE_']
*/
// console.log(`Hola ${obj1.nombre}`);
// console.log(`${obj1['edad']} años`);

/*
Agregar/Modificar elementos a un objeto
_OBJ_._CLAVE_ = VALOR;
_OBJ_['_CLAVE_] = VALOR;
- - - - NOTA: Si el valor ya existe, se sobreescribirá - - - -
*/
obj1.fechaNacimiento = '29-05-1988';
obj1['matricula'] = '2007313035';
obj1.nombre = 'Jonathan R. Zea';
obj1.rfc = 'ZAZR880529GB5';
//console.log(obj1);

/* 
Borrar elementos de un objeto
usamos la palabra reservada delete
delete _OBJ_._CLAVE_;
delete _OBJ_['_CLAVE_];
*/
delete obj1.estatura;
delete obj1['rfc'];
//console.log(obj1);

/*
Spread operator 
Operador de propagación
*/
const persona1 = {nombre : 'Ismael'};
const persona2 = persona1;
persona2.nombre = 'Jonathan';
persona2.edad = 18;

/*
Los objetos de Javascript hacen referencia 
a la dirección de memoria, NO AL VALOR, por ello
un cambio en uno de ellos, afecta 
a todas las referencias
*/
console.log('Persona1 =', persona1);
console.log('Persona2 =', persona2);

/*
El operador spread (propagación) permite generar 
una direccion de memoria nueva, a partir del contenido
indicado
{..._OBJ_}
*/
const persona3 = {'nombre' : 'Anai'};
//Copiamos el contenido en un objeto nuevo
const persona4 = {...persona3};
persona4.nombre = 'Liliana';
persona4.edad = 55;

console.log('Persona3 =', persona3);
console.log('Persona4 =', persona4);