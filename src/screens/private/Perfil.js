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

/*
Para utilizar cualquier hardware del dispositivo es necesario
preguntar al usuario si nos concede el permiso, de lo contrario
no podemos continuar
*/
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-image-picker';

const Perfil = (props) => {
	const [cargando, setCargando] = useState(false);
	const [formData, setFormData] = useState({
		email: firebase.auth.currentUser.email,
		nombre: firebase.auth.currentUser.displayName,
		avatar: firebase.auth.currentUser.photoURL,
	});

	/*
    Funcion flecha que permita acceder a 
    la galería y tomar una foto
    */
	const getImagenGaleria = async () => {
		/**
		 * Preuntamos por el permiso de ingresar a su galería
		 */
		const { status } =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		/*
        Si el usuario nos dió permiso, continuamos
        */
		if (status === 'granted') {
			/**
			 * Tomamos la imagen de la galería
			 */
			const imgGaleria =
				await ImagePicker.launchImageLibraryAsync({
					//Tipo de elemento d ela galería (img / videos / todo)
					mediaTypes:
						ImagePicker.MediaTypeOptions.Images,
					//
					allowsEditing: true,
					//Relación de aspecto
					aspect: [1, 1],
					quality: 1,
				});
			console.log(imgGaleria);
			/*
            Si se seleccionó una imagen, 
            continuamos
            */
			if (!imgGaleria.cancelled) {
				setFormData({
					...formData,
					['avatar']: imgGaleria.uri,
				});
			}
		}
	};

	/**
	 * FF para tomar una fotografía desde la cámara
	 */
	const getImagenCamara = async () => {
		console.log('Aqui');
		/*
        Pedir permiso de acceso a la cámara
        Y a la galería
        */
		const permisoCamara =
			await ImagePicker.requestCameraPermissionsAsync();
		const permisoGaleria =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		/**
		 * Si tenemos ambos permisos
		 */
		console.log(permisoCamara);
		console.log(permisoGaleria);
		if (
			permisoCamara.status === 'granted' &&
			permisoGaleria.status === 'granted'
		) {
			/*
            Tomamos la imgen desde la cámara utilizando
            los mismo parámetros que la galería */
			const imgCamara =
				await ImagePicker.launchCameraAsync({
					mediaTypes:
						ImagePicker.MediaTypeOptions.Images,
					allowsEditing: true,
					aspect: [4, 4],
					quality: 1,
				});

			/*
            Si se lecciono una foto
            */
			if (!imgCamara.cancelled) {
				setFormData({
					...formData,
					['avatar']: imgCamara.uri,
				});
			}
		}
	};

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
					overflow: 'hidden',
				}}
			>
				<TouchableOpacity
					style={{
						position: 'absolute',
						padding: 10,
						borderWidth: 2,
						borderColor: '#000',
						backgroundColor: '#000',
						width: '100%',
						borderRadius: 7,
						bottom: 0,
						left: 0,
						alignItems: 'center',
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
								{
									text: 'Desde la cámara',
									onPress:
										getImagenCamara,
								},
								{
									text: 'Desde la galería',
									onPress:
										getImagenGaleria,
								},
							]
						)
					}
				>
					<Text style={{ color: '#fff' }}>
						<Feather name='edit-2' size={24} />
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
