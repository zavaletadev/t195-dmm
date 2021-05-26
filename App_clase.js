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

Cuando creamos un Screen de ReactN desde una clase, necesitamos:
1.- Crear una clase que se exporte, pero que herede de React.Component y 
retornar el contenido gráfico desde el método render
*/
import React, { Component } from 'react';
import { Platform, SafeAreaView, Text } from 'react-native';

class App extends Component {
	/**
	 * Sobreescribimos el método render
	 */
	render() {
		return (
			<SafeAreaView
				style={{
					marginTop:
						Platform.OS === 'ios' ? 0 : 30,
				}}
			>
				<Text>Hola desde una clase</Text>
			</SafeAreaView>
		);
	}
}

export default App;
