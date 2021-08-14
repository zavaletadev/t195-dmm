import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dificultad from './src/screens/Dificultad';
import Juego from './src/screens/Juego';
import JuegoDificil from './src/screens/JuegoDificil';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Dificultad'
				headerMode='float'
			>
				<Stack.Screen
					name='Dificultad'
					component={Dificultad}
				/>

				<Stack.Screen
					name='Juego'
					component={Juego}
				/>

				<Stack.Screen
					name='JuegoDificil'
					component={JuegoDificil}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
