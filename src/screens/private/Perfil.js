import React, { useState } from 'react';
import {
	Alert,
	Button,
	Image,
	ImageBackground,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import firebase from './../../backend/firebase';

const Perfil = (props) => {
	const [cargando, setCargando] = useState(false);
	const [formData, setFormData] = useState({
		email: firebase.auth.currentUser.email,
		nombre: firebase.auth.currentUser.displayName,
		avatar: firebase.auth.currentUser.photoURL,
	});

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				paddingHorizontal: 10,
			}}
		>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: 24,
					letterSpacing: 1,
					marginBottom: 10,
				}}
			>
				Perfil.js
			</Text>
			<Text
				style={{
					fontWeight: '600',
					fontSize: 20,
					letterSpacing: 1,
					marginBottom: 40,
					color: firebase.auth.currentUser
						.emailVerified
						? 'seagreen'
						: 'tomato',
				}}
			>
				Usuario verificado:{' '}
				{firebase.auth.currentUser.emailVerified.toString()}{' '}
			</Text>
			<ImageBackground
				source={{
					uri: formData.avatar,
				}}
				style={{
					backgroundColor: 'tomato',
					width: 200,
					height: 200,
					borderRadius: 100,
					position: 'relative',
				}}
			>
				<TouchableOpacity
					style={{
						position: 'absolute',
						padding: 10,
						borderWidth: 2,
						borderColor: '#000',
						backgroundColor: '#000',
						width: '50%',
						borderRadius: 7,
						bottom: 10,
						left: 0,
					}}
					onPress={() =>
						Alert.alert(
							'Actualizar Avatar',
							'¿Cómo deseas actualizar?',
							[
								{
									text: 'Cencelar',
									style: 'destructive',
								},
								{ text: 'Desde la cámara' },
								{
									text: 'Desde la galería',
								},
							]
						)
					}
				>
					<Text style={{ color: '#fff' }}>
						<Feather name='edit-2' size={20} />
						{'  '}
						Editar
					</Text>
				</TouchableOpacity>
			</ImageBackground>

			<TextInput
				keyboardType='email-address'
				maxLength={70}
				autoCapitalize='none'
				autoCorrect={false}
				style={{
					marginVertical: 15,
					width: '100%',
					borderRadius: 7,
					paddingVertical: 5,
					paddingHorizontal: 10,
					borderColor: 'tomato',
					borderWidth: 2,
					fontSize: 16,
				}}
				placeholder='Correo electrónico'
				editable={!cargando}
				value={formData.email}
				// Guardamos lo que escribe en el
				//state de objeto, peeeeero antes de
				//escribir en el, recuperamos la info
				//anterior
				onChangeText={(val) =>
					setFormData({
						...formData,
						['email']: val,
					})
				}
			/>

			<TextInput
				keyboardType='default'
				maxLength={120}
				autoCapitalize='words'
				autoCorrect={true}
				style={{
					marginVertical: 15,
					width: '100%',
					borderRadius: 7,
					paddingVertical: 5,
					paddingHorizontal: 10,
					borderColor: 'tomato',
					borderWidth: 2,
					fontSize: 16,
				}}
				placeholder='Nombre completo'
				editable={!cargando}
				value={formData.nombre}
				// Guardamos lo que escribe en el
				//state de objeto, peeeeero antes de
				//escribir en el, recuperamos la info
				//anterior
				onChangeText={(val) =>
					setFormData({
						...formData,
						['nombre']: val,
					})
				}
			/>

			<Button
				title='Guardar cambios'
				color='tomato'
			/>
		</View>
	);
};

export default Perfil;
