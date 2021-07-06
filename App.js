import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/public/Login';
import Registro from './src/screens/public/Registro';
import HomeDrawer from './src/screens/private/HomeDrawer';
import ListaGeneros from './src/screens/public/ListaGeneros';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AgregarGenero from './src/screens/public/AgregarGenero';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Stack.Navigator initialRouteName='Login'> */}
			<Stack.Navigator initialRouteName='ListaGeneros'>
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
				<Stack.Screen
					options={(propsScreen) => ({
						title: 'Géneros',
						headerRight: () => (
							<TouchableOpacity
								style={{
									paddingHorizontal: 20,
									paddingVertical: 10,
								}}
								onPress={() =>
									propsScreen.navigation.navigate(
										'AgregarGenero'
									)
								}
							>
								<MaterialIcons
									name='library-add'
									color='tomato'
									size={28}
								/>
							</TouchableOpacity>
						),
					})}
					name='ListaGeneros'
					component={ListaGeneros}
				/>
				<Stack.Screen
					options={{
						title: '+ Género',
					}}
					name='AgregarGenero'
					component={AgregarGenero}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
