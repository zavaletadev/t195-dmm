import React from 'react';
import { Text, View } from 'react-native';

/*
Si deseamos utilizar props en un componente
realizado a partir de una función anónima, debemos pasar
el parámetro predeterminado llamado props
*/
const TarjetaCAF = (props) => {
	console.log(props);
	return (
		<View>
			<Text style={{ color: props.colorTexto }}>
				Nombre: {props.datosPerso.nombre}
			</Text>
			<Text style={{ color: props.colorTexto }}>
				Edad: {props.datosPerso.edad} años
			</Text>
			<Text style={{ color: props.colorTexto }}>
				Fecha nacimiento:{' '}
				{props.datosPerso.fechaNac}
			</Text>
			<Text style={{ color: props.colorTexto }}>
				Correo: {props.datosPerso.correo}
			</Text>
			<Text style={{ color: props.colorTexto }}>
				Teléfono: {props.datosPerso.telefono}
			</Text>
			<Text style={{ color: props.colorTexto }}>
				Matrícula: {props.datosPerso.matricula}
			</Text>
		</View>
	);
};

export default TarjetaCAF;
