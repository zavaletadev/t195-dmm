/*
ReactNative es una librería de componentes para 
disp. móviles Android y iOS que se desprende de
ReactJS, la misma librería, pero para aplicaciones
web.

La nomenclatura de una UI de React. básica necesita:
1.- La importación de react como librería base
2.- retornar desde una función, una clase o una constante
mínimo un componente gráfico
3.- Exporta como elemento defecto, el componente que retorna
al elemento gráfico

Creamos una constante que guarde una función anónima utilizando
Arrow function
*/

import React from 'react';
import {
	Platform,
	SafeAreaView,
	Text,
	View,
} from 'react-native';

const App = () => {
	return (
		<SafeAreaView
			style={{
				marginTop: Platform.OS === 'ios' ? 0 : 30,
			}}
		>
			<Text>Hola desde una constante con AF</Text>
		</SafeAreaView>
	);
};

export default App;
