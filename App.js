import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/public/Login';
import Registro from './src/screens/public/Registro';
import HomeDrawer from './src/screens/private/HomeDrawer';
import ListaGeneros from './src/screens/public/ListaGeneros';
import { LogBox, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AgregarGenero from './src/screens/public/AgregarGenero';
import EditarGenero from './src/screens/public/EditarGenero';
import Practica1U2 from './src/screens/public/Practica1U2';
import ListaPeliculas from './src/screens/public/ListaPeliculas';
import AgregarPelicula from './src/screens/public/AgregarPelicula';
import EjemploUbicacion from './src/screens/private/EjemploUbicacion';

const Stack = createStackNavigator();

export default function App() {
	LogBox.ignoreLogs(['Setting a timer']);
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='StackUbicacion'
				headerMode='float'
			>
				<Stack.Screen
					name='Practica1U2'
					component={Practica1U2}
				/>
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
					options={{ gestureEnabled: false }}
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

				<Stack.Screen
					options={{ title: 'Editar género' }}
					name='EditarGenero'
					component={EditarGenero}
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
										'AgregarPelicula'
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
					name='ListaPeliculas'
					component={ListaPeliculas}
				/>
				<Stack.Screen
					name='AgregarPelicula'
					component={AgregarPelicula}
				/>

				<Stack.Screen
					name='StackUbicacion'
					component={EjemploUbicacion}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
