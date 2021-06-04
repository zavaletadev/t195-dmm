import React from 'react';

import TableroAjedrez from './src/components/TableroAjedrez';
import EjemploFlex from './src/components/EjemploFlex';
import EstilosComponentes from './src/components/EstilosComponentes';
import EstilosObjeto from './src/components/EstilosObjeto';
import EstilosArchivo from './src/components/EstilosArchivo';
import Formulario from './src/components/Formulario';

/*
Existen diversas maneras de generar un estilo en RN
Todas ellas, basadas en la versatilidad del diseño con 
CSS
1.- Estilos directamente sobre los componentes
    Los estilos sobre compontntes deben ser porops complejas, específicamente
    objetos
2.- Crear un objeto de estilos para el componente padre y todos sus hijos
3.- Crear un componente externo de estilos
*/

/*
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ejemplo de flex
const App = (props) => {
	return <EjemploFlex />;
};
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ejemplo de tablero de ajedrez
const App = (props) => {
	return <TableroAjedrez />;
};
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ejemplo de estilos directo en componentes
const App = (props) => {
	return <EstilosComponentes />;
};
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ejemplo de estilos desde un objeto
const App = (props) => {
	return <EstilosObjeto />;
};
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ejemplo de estilos desde un archivo
const App = (props) => {
	return <EstilosArchivo />;
};
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Ejemplo de estilos en componentes de un formulario
const App = (props) => {
	return <Formulario />;
};
*/

const App = (props) => {
	return <Formulario />;
};

export default App;
