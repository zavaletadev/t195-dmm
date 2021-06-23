import React from 'react';
import { Button, ScrollView, Text } from 'react-native';

const Menu = (props) => {
	/**
	 * Para navegar entre pantallas utilizamos el método
	 * navigation.navigate('NAME_SCREEN');
	 */
	return (
		<ScrollView>
			<Button
				title='Ejemplo States'
				onPress={() =>
					props.navigation.navigate(
						'EjemploStates'
					)
				}
			/>
			<Button
				title='Tarjeta usando Clase'
				onPress={() =>
					props.navigation.navigate('EjemploCs')
				}
			/>

			<Button
				title='Formulario'
				onPress={() =>
					props.navigation.navigate('Formulario')
				}
			/>

			<Button
				title='FlatList'
				onPress={() =>
					props.navigation.navigate(
						'EjemploFlatList'
					)
				}
			/>

			<Button
				title='Contenido remoto (Fetch)'
				onPress={() =>
					props.navigation.navigate(
						'EjemploFetch'
					)
				}
			/>
			<Button title='Contenido remoto (Async)' />
		</ScrollView>
	);
};

export default Menu;
