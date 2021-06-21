import React, { useState } from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import TarjetaItem from '../components/TarjetaItem';

/*
Arreglo de 15000 elementos
'Elemento ${i}'
*/
const datos = [];
for (let i = 1; i <= 15000; i++) {
	datos.push(`Elemento ${i}`);
}

const EjemploFlatList = (props) => {
	const [arreglo, setArreglo] = useState(datos);

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
			data={arreglo}
			renderItem={(item) => (
				<TarjetaItem
					elemento={item.item}
					indice={item.index}
				/>
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
