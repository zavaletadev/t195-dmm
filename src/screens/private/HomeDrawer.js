import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import AdopcionTab from './AdopcionTab';
import Awww from './Awww';
import Solicitudes from './Solicitudes';
import Perfil from './Perfil';
import Salir from './Salir';
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
	return (
		/**
		 * No necesitamos un NavigationContainer porque
		 * App.js (Nuestro padre) lo ha implementado
		 * */
		<Drawer.Navigator>
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

			<Drawer.Screen name='Salir' component={Salir} />
		</Drawer.Navigator>
	);
};

export default HomeDrawer;
