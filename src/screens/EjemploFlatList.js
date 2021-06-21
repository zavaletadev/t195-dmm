import React, { useState } from 'react';
import {
	ScrollView,
	FlatList,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import TarjetaItem from '../components/TarjetaItem';

/*
Arreglo de 15000 elementos
'Elemento ${i}'
*/
const datos = [];
for (let i = 1; i <= 15; i++) {
	datos.push(`Elemento ${i}`);
}

const EjemploFlatList = (props) => {
	const [arreglo, setArreglo] = useState(datos);
	const [elemPin, setElemPin] = useState(0);

	/**
	 * FlatList es un componente para mostrar
	 * listas de datos de manera dinámica, contruyendo
	 * unicamente los elementos que se ven en pantalla
	 * Componentes minimos de FlatList
	 *
	 * 1.- data --------- indica la colección de datos
	 * 2.- renderItem --- Indica el diseño de cada
	 *                    elemento, es una FF que contiene
	 *                    el elemento de la colección y el
	 *                    indice
	 * 3.- keyExtractor - Indicamos el id de cada
	 *                    elemento
	 */
	return (
		<FlatList
			ListHeaderComponent={() => (
				<View
					style={{
						padding: 30,
						backgroundColor: '#B8B8FF',
					}}
				>
					<Text>Encabezado</Text>
				</View>
			)}
			stickyHeaderIndices={[elemPin]}
			ListFooterComponent={() => (
				<View
					style={{
						padding: 30,
						backgroundColor: '#B8B8FF',
					}}
				>
					<Text>Footer</Text>
				</View>
			)}
			data={arreglo}
			renderItem={(item) => (
				<TouchableOpacity
					onPress={() => setElemPin(item.index)}
				>
					<TarjetaItem
						elemento={item.item}
						indice={item.index}
					/>
				</TouchableOpacity>
			)}
			keyExtractor={(item, index) => `ti-${index}`}
		/>
	);
};

// const EjemploFlatList = (props) => {
// 	const [arreglo, setArreglo] = useState(datos);
// 	return (
// 		<ScrollView>
// 			{arreglo.map((elemento, indice) => {
// 				return (
// 					<TarjetaItem
// 						elemento={elemento}
// 						indice={indice}
// 					/>
// 				);
// 			})}
// 		</ScrollView>
// 	);
// };

export default EjemploFlatList;
