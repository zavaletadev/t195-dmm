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
import { StyleSheet, Text, View } from 'react-native';
import TarjetaCs from './src/components/TarjetaCs';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='light' />
			<TarjetaCs
				colorTexto='#fff'
				nombre='RZZ'
				edad={32}
				fechaNac='29/05/1988'
				correo='rzz@gmail.com'
				telefono='(442) 129 8927'
				matricula='2007313035'
			/>

			<View style={{ marginTop: 30 }} />

			<TarjetaCs
				colorTexto='#00ff00'
				nombre='JRZ'
				edad={18}
				fechaNac='17/02/2003'
				correo='jonathaniz@gmail.com'
				telefono='(442) 222 2299'
				matricula='2021291045'
			/>
		</View>
	);
}

function MiElemento() {
	return (
		<View>
			<Text style={{ color: '#FF0000' }}>
				Aquí en mi elemento
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
