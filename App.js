import React from 'react';

import TableroAjedrez from './src/components/TableroAjedrez';
import EjemploFlex from './src/components/EjemploFlex';
import EstilosComponentes from './src/components/EstilosComponentes';
import EstilosObjeto from './src/components/EstilosObjeto';
import EstilosArchivo from './src/components/EstilosArchivo';
import Formulario from './src/components/Formulario';
import Contador from './src/components/Contador';
import Menu from './src/components/Menu';
import TarjetaCs from './src/components/TarjetaCs';

/**
 * Para generar una navegación se neceita:
 * 1.- NavigationContainer (SOLO UNO POR APP)
 * 2.- Un tipo de navegacion (Stack, Tab o Drawer)
 */
import { NavigationContainer } from '@react-navigation/native';
//Navegacion por stack (pila o pestañas)
import { createStackNavigator } from '@react-navigation/stack';
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Ejemplo de estados 
const App = (props) => {
	return <Contador />;
};
*/

/**
 * Creamos la estructura de Screens asociadas al stack
 * indicando:
 * 1.- Sobrenombre para navegar
 * 2.- El componente con el contenido de la screen
 *
 * Cuando usamos ReactNavigation, el elemento
 * padre de la navegación es NavigationContainer y
 * SOLO DEBERÍA HABER UNO POR APP
 */

const Stack = createStackNavigator();
const App = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Menu'
					component={Menu}
				/>

				<Stack.Screen
					name='EjemploStates'
					component={Contador}
				/>

				<Stack.Screen
					name='EjemploCs'
					component={TarjetaCs}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
