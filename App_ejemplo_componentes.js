/**
 * La nomenclatura de react, divide a los elementos
 * de una app en 2 grandes grupos:
 * 1.- Screens ------- Son el eq. Vistas
 * 2.- Components ---- Son elementos reutilizables
 *                     y configurables dentr de
 *                     un screen
 *
 * COP Component Oriented Programming
 * POC Programación Orientada a Objetos
 *
 * PE, POO, MVC, MVVM, POC
 */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TarjetaCAF from './src/components/TarjetaCAF';
import TarjetaCs from './src/components/TarjetaCs';

export default function App() {
	const datos = {
		nombre: 'Raul',
		edad: 33,
		fechaNac: '29/05/1988',
		correo: 'rzz@uteq.edu.mx',
		telefono: '(442) 204 8329',
		matricula: '2007313035',
	};

	return (
		<View style={styles.container}>
			<StatusBar style='light' />

			<ScrollView>
				<TarjetaCs
					colorTexto='#fff'
					nombre='RZZ'
					edad={32}
					fechaNac='29/05/1988'
					correo='rzz@gmail.com'
					telefono='(442) 129 8927'
					matricula='2007313035'
				/>

				<Espacio alto={20} />

				<TarjetaCs
					colorTexto='#00ff00'
					nombre='JRZ'
					edad={18}
					fechaNac='17/02/2003'
					correo='jonathaniz@gmail.com'
					telefono='(442) 222 2299'
					matricula='2021291045'
				/>

				<Espacio alto={40} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>

				<Espacio alto={20} />

				<TarjetaCAF
					colorTexto='#ABC989'
					datosPerso={datos}
				/>
			</ScrollView>
		</View>
	);
}

/*
Si deseamos utilizar props en un componente
realizado a partir de una función, debemos pasar
el parámetro predeterminado llamado props
*/
function Espacio(props) {
	return <View style={{ marginVertical: props.alto }} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
