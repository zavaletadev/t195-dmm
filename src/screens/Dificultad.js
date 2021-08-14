import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';

const Dificultad = (props) => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: 'space-around',
			}}
		>
			<Button
				title='Facil'
				color='blue'
				onPress={() =>
					props.navigation.navigate('Juego')
				}
			/>
			<Button
				title='Dificil'
				color='red'
				onPress={() =>
					props.navigation.navigate(
						'JuegoDificil'
					)
				}
			/>
		</SafeAreaView>
	);
};

export default Dificultad;
