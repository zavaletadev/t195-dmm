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
*/

//1.- importar react
import React from 'react';

//1.1 Importar los elementos
//    gráficos a utilizar
import { Platform, SafeAreaView, Text } from 'react-native';

//2.- crear elemento para exportar
//    Normalmente el elemento a exportar se llama
//    igual que el archivo Y empieza con mayúsculas
//    y notación camello
function App() {
	//Retornar un componente gráfico
	return (
		<SafeAreaView>
			{/**
			 * JSX es la representación de
			 * clases, objetos o funciones de
			 * JS, por lo que pueden contener
			 * propiedades (props)
			 * Las propiedades se representan
			 * de dos maneras:
			 * propSimple='Valor_simple'
			 * propCompuesta={_ELEM_}
			 *
			 * Existe una biblioteca de elementos
			 * para utilizar en cada SO y se llama
			 * Platform, donde podemos indicar un
			 * diseño o comportamiento particular
			 * en cada arquitectura
			 *
			 * Daremos margen superior al texto SOLO
			 * si la app corre en Android
			 */}
			<Text
				style={{
					marginTop:
						Platform.OS === 'ios' ? 0 : 30,
				}}
			>
				HOLA DESDE UNA FUNCIÓN
			</Text>
		</SafeAreaView>
	);
}

//Exportar el elemento
export default App;
