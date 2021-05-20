/*
JS permite escribir codigo con el 
paradigma estructurado o bien, usando el paradigma 
orientado a objetos, las clases en JS NO UTILIZAN 
el prefijo public, ya que en la estructura, todas 
son públicas (no existen modificadores de acceso 
explícitos)
*/
export default class Persona {

    /*
    Los atributos pueden declararse en cualquier método
    La palabra reservada this, permite la creación 
    de dichos atributos. 

    El constructor es un método que se inicializa
    al ejecutarse la creción de la instancia
    */
   constructor() { }

   /*
   Las clases permiten generar métodos, los metodos
   son bloques de código que realizan una acción
   particular

   _NOMBRE_METODO_(PARAMS...) {}
   */

   /**
    * Metodo que muestre el nombre y la edad 
    * de la persona
    */
   mostrarPersona() {
       console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
   }

}

export class Transformer {
    constructor(tipo, vehiculo) {
        this.tipo = tipo;
        this.vehiculo = vehiculo;
    }

    mostrarTransformer() {
        console.log(`Tipo: ${this.tipo}, Vehículo: ${this.vehiculo}`);
    }
}

export class Objeto {
    constructor() {}
}

/*Para poder utilizar de manera externa 
un elemento de una clase como módulo
debemos importarlo
Esta forma aplica cuando solo vamos a exportar un elemento por achivo

NOTA:
Solo puede existir un 'export default' por archivo, los demás deben ser solo
'export'
*/
//export default Persona;