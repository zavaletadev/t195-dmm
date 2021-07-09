import React, { useState } from 'react';
import { Text, View } from 'react-native';
const AgregarPelicula = (props) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>
				Datos de una peli:
				{'\n'}
				{'\n'}- Título
				{'\n'}- Descripción
				{'\n'}- Géneros [varios, exsitentes en la
				base de datos]
				{'\n'}- Póster (String de la url del poster)
				{'\n'}- Calificación en número decimal del 1
				al 10
			</Text>
		</View>
	);
};

export default AgregarPelicula;
