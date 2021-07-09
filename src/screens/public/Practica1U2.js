import React from 'react';
import { Button, View } from 'react-native';

const Practica1U2 = (props) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Button
				title='Géneros'
				onPress={() =>
					props.navigation.navigate(
						'ListaGeneros'
					)
				}
			/>
			<Button
				title='Películas'
				onPress={() =>
					props.navigation.navigate(
						'ListaPeliculas'
					)
				}
			/>
			<Button
				title='FirulApp'
				onPress={() =>
					props.navigation.navigate('Login')
				}
			/>
		</View>
	);
};

export default Practica1U2;
