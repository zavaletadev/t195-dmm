import React, { useLayoutEffect } from 'react';
import { DrawerActions } from '@react-navigation/core';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import AdopcionTab from './AdopcionTab';
import Awww from './Awww';
import Solicitudes from './Solicitudes';
import Perfil from './Perfil';
import Salir from './Salir';
import Sidebar from '../../components/Sidebar';
import { TouchableWithoutFeedback } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import EjemploUbicacion from './EjemploUbicacion';

const Drawer = createDrawerNavigator();

/**
 * Para utilizar cualquier tipo de navegación
 * necesitamos un contenedor (router) que contenga
 * todos los componentes a los que se podrá navegar
 *
 * Tanto en HomeDrawer como en AdopcionTab
 * no encontrarás Screens, solo el contenedor
 * de los elementos navegables
 */
const HomeDrawer = (props) => {
	/*
    useEffect -> ciclo de vida de un componente 
    (full component/ fragment component)
    --Se ejecuta despues de presentar la UI--

    useLayoutEffect -> ciclo de vida de un componente 
    (full component/ fragment component)
    --Se ejecuta antes de presentar la UI--
    */
	useLayoutEffect(() => {
		/*
        Justo antes de mostrar la UI vamos a modificar 
        el boton izquierdo del header de menú
        */
		props.navigation.setOptions({
			headerLeft: () => (
				<TouchableWithoutFeedback
					onPress={() =>
						props.navigation.dispatch(
							DrawerActions.toggleDrawer()
						)
					}
				>
					<Entypo
						name='menu'
						size={32}
						color='tomato'
						style={{
							paddingVertical: 5,
							paddingLeft: 5,
							paddingRight: 20,
						}}
					/>
				</TouchableWithoutFeedback>
			),
		});
	}, []);

	return (
		/**
		 * No necesitamos un NavigationContainer porque
		 * App.js (Nuestro padre) lo ha implementado
		 * */
		<Drawer.Navigator
			initialRouteName='Feed'
			drawerContent={() => <Sidebar {...props} />}
		>
			<Drawer.Screen name='Feed' component={Feed} />

			<Drawer.Screen
				name='AdopcionTab'
				component={AdopcionTab}
			/>

			<Drawer.Screen name='Awww' component={Awww} />

			<Drawer.Screen
				name='Solicitudes'
				component={Solicitudes}
			/>

			<Drawer.Screen
				name='Perfil'
				component={Perfil}
			/>

			<Drawer.Screen
				name='Ubicacion'
				component={EjemploUbicacion}
			/>

			<Drawer.Screen name='Salir' component={Salir} />
		</Drawer.Navigator>
	);
};

export default HomeDrawer;
