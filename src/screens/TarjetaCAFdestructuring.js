import React from 'react';
import { Text, View } from 'react-native';

/*
Si deseamos utilizar props en un componente
realizado a partir de una función anónima, debemos pasar
el parámetro predeterminado llamado props

Desde que tomamos las props, las destructuramos para tomar 
cada elemento del objeto props como una variable separada
*/
const TarjetaCAF = ({ colorTexto, datosPerso }) => {
	/*
    destructuración de objetos consiste en utilizar el proceso inverso
    de crear variables a partir de los indices o propiedades de un objeto/arreglo
    */

	//Destructuramos en variables individuales (del mismo nombre que la clave)
	const {
		nombre,
		edad,
		fechaNac,
		correo,
		telefono,
		matricula,
	} = datosPerso;

	return (
		<View>
			<Text style={{ color: colorTexto }}>
				Nombre: {nombre}
			</Text>
			<Text style={{ color: colorTexto }}>
				Edad: {edad} años
			</Text>
			<Text style={{ color: colorTexto }}>
				Fecha nacimiento: {fechaNac}
			</Text>
			<Text style={{ color: colorTexto }}>
				Correo: {correo}
			</Text>
			<Text style={{ color: colorTexto }}>
				Teléfono: {telefono}
			</Text>
			<Text style={{ color: colorTexto }}>
				Matrícula: {matricula}
			</Text>
		</View>
	);
};

export default TarjetaCAF;
