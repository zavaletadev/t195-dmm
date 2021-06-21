import React from 'react';

import {
	Button,
	Image,
	Text,
	View,
	StyleSheet,
} from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';

const EstilosObjeto = (props) => {
	return (
		<View style={styles.contenedor}>
			{/**
			 * Para agregar mas de un estilo desde un objeto
			 * en una prop style, podemos usar
			 * 1.- Un arreglo
			 * 2.- Clonar un nuevo objeto de estilos (op. spread {...})
			 */}
			<View
				style={[
					styles.contenedor,
					styles.centrado,
					styles.fondoAzul,
				]}
			>
				<Image
					source={require('./../../assets/media/images/fotoperfil.jpg')}
					style={styles.imagenPerfil}
				/>
				<Text
					style={[
						styles.titulo,
						styles.textoAmarilloClaro,
					]}
				>
					Raúl Zavaleta Zea
				</Text>

				<Text
					style={[
						styles.subtitulo,
						styles.textoAzul,
					]}
				>
					Profe &amp; Arquitecto de Apps
				</Text>
			</View>
			<View
				style={{
					...styles.contenedor,
					...styles.centrado,
					...styles.fondoAmarillo,
					flexDirection: 'row',
				}}
			>
				<View
					style={[
						styles.contenedor,
						styles.centrado,
					]}
				>
					<Text style={styles.icoContacto}>
						<Entypo
							name='old-phone'
							size={32}
							color={colores.textoAzulClaro}
						/>
						{'\n\n'}
						(442) 204 8329
					</Text>

					<Button
						title='Llamar'
						color={colores.textoAzul}
					/>
				</View>

				<View
					style={[
						styles.contenedor,
						styles.centrado,
					]}
				>
					<Text style={styles.icoContacto}>
						<Entypo
							name='email'
							size={32}
							color={colores.textoAzulClaro}
						/>
						{'\n\n'}
						rzz@gmail.com
					</Text>

					<Button
						title='Escribir'
						color={colores.textoAzul}
					/>
				</View>

				<View
					style={[
						styles.contenedor,
						styles.centrado,
					]}
				>
					<Text style={styles.icoContacto}>
						<AntDesign
							name='github'
							size={32}
							color={colores.textoAzulClaro}
						/>
						{'\n\n'}
						@zavaletamx
					</Text>

					<Button
						title='Ver perfil'
						color={colores.textoAzul}
					/>
				</View>
			</View>
		</View>
	);
};

/*
Podemos generar objetos que guarden nuestro estilo (muy similar a un 
archivo CSS) con la intención de reutilizar nuestros estilos en diversos
componentes

Para ello generamos una instancia de un objeto de estilos

La nomenclatura de los estilos de RN es equivalente a un 
objetos con claves (indices/propiedades) y valores*/
const colores = {
	textoAmarilloClaro: '#feddbe',
	textoAmarillo: '#ffc947',
	textoAzulClaro: '#185adb',
	textoAzul: '#0a1931',
};
const styles = StyleSheet.create({
	contenedor: {
		flex: 1,
	},
	centrado: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	fondoAzul: {
		backgroundColor: '#185adb',
	},
	fondoAmarillo: {
		backgroundColor: '#ffc947',
	},
	textoAmarilloClaro: {
		color: '#feddbe',
	},
	textoAmarillo: {
		color: '#ffc947',
	},
	textoAzulClaro: {
		color: '#185adb',
	},
	textoAzul: {
		color: '#0a1931',
	},
	imagenPerfil: {
		width: 150,
		height: 150,
		resizeMode: 'cover',
		borderRadius: 75,
		marginBottom: 20,
	},
	titulo: {
		fontSize: 22,
		marginBottom: 20,
	},
	subtitulo: {
		fontSize: 26,
		fontWeight: 'bold',
	},
	icoContacto: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colores.textoAzul,
		marginBottom: 30,
	},
});

export default EstilosObjeto;
