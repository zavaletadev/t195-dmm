import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/public/Login';
import Registro from './src/screens/public/Registro';
import HomeDrawer from './src/screens/private/HomeDrawer';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen
					name='Login'
					component={Login}
				/>
				<Stack.Screen
					name='Registro'
					component={Registro}
				/>
				<Stack.Screen
					name='HomeDrawer'
					component={HomeDrawer}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
