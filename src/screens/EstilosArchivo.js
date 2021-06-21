import React from 'react';

import { Button, Image, Text, View } from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';

import styles from './../styles/styles';
import colores from './../styles/colores';

const EstilosArchivo = (props) => {
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
						styles.textoAmarillo,
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

export default EstilosArchivo;
