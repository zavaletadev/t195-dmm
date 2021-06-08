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
		</ScrollView>
	);
};

export default Menu;
