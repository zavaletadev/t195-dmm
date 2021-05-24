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

export default function App() {
	return React.createElement(
		View,
		{
			style: styles.container,
		},
		React.createElement(
			Text,
			{
				style: {
					color: '#00FF00',
					fontSize: 30,
				},
			},
			'XD'
		),
		React.createElement(StatusBar, {
			style: 'auto',
		})
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
