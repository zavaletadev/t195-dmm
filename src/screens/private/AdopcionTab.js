import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaAdopcion from './ListaAdopcion';
import AgregaAdopcion from './AgregaAdopcion';
const Tab = createBottomTabNavigator();
/**
 * AdopciónTab se convierte en un contenedor para
 * una navegación de  tipo Tabs, por lo que
 * este archivo tampoco contendrá elementos gráficos
 * ni de screens ni de components
 *
 * Tambien reutilizaremos el NavigationContainer que
 * se implementó en App.js
 */

const AdopcionTab = (props) => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='ListaAdopcion'
				component={ListaAdopcion}
			/>
			<Tab.Screen
				name='AgregaAdopcion'
				component={AgregaAdopcion}
			/>
		</Tab.Navigator>
	);
};

export default AdopcionTab;
