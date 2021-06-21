import React from 'react';

import { Button, Image, Text, View } from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';

const EstilosComponentes = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					backgroundColor: '#185adb',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/**
				 * Imagenes:
				 * Siempre agregar ancho y alto
				 *
				 * Imagen a partir de una URL
				 */}
				{/* <Image
					source={{
						uri: 'https://patijinich.com/es/wp-content/uploads/sites/3/2019/08/804-tacos-campechanos-de-suadero-longaniza-y-chicharron-con-salsa-callejera.jpg',
					}}
					style={{
						width: 150,
						height: 150,
					}}
				/> */}
				{/**
				 * Imagen a partir de un archivo local
				 */}
				<Image
					source={require('./../../assets/media/images/fotoperfil.jpg')}
					style={{
						width: 150,
						height: 150,
						resizeMode: 'cover',
						borderRadius: 75,
						marginBottom: 20,
					}}
				/>
				<Text
					style={{
						fontSize: 22,
						color: '#feddbe',
						marginBottom: 20,
					}}
				>
					Raúl Zavaleta Zea
				</Text>

				<Text
					style={{
						fontSize: 26,
						fontWeight: 'bold',
						color: '#0a1931',
					}}
				>
					Profe &amp; Arquitecto de Apps
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#ffc947',
				}}
			>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 16,
							textAlign: 'center',
							fontWeight: 'bold',
							color: '#185adb',
							marginBottom: 30,
						}}
					>
						<Entypo
							name='old-phone'
							size={32}
							color='#0a1931'
						/>
						{'\n\n'}
						(442) 204 8329
					</Text>

					<Button
						title='Llamar'
						color='#185adb'
					/>
				</View>

				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 16,
							textAlign: 'center',
							fontWeight: 'bold',
							color: '#185adb',
							marginBottom: 30,
						}}
					>
						<Entypo
							name='email'
							size={32}
							color='#0a1931'
						/>
						{'\n\n'}
						rzz@gmail.com
					</Text>

					<Button
						title='Escribir'
						color='#185adb'
					/>
				</View>

				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 16,
							textAlign: 'center',
							fontWeight: 'bold',
							color: '#185adb',
							marginBottom: 30,
						}}
					>
						<AntDesign
							name='github'
							size={32}
							color='#0a1931'
						/>
						{'\n\n'}
						@zavaletamx
					</Text>

					<Button
						title='Ver perfil'
						color='#185adb'
					/>
				</View>
			</View>
		</View>
	);
};

export default EstilosComponentes;
