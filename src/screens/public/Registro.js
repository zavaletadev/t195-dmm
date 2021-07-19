import React, { useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Button,
	Image,
	TextInput,
	View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import firebase from './../../backend/firebase';

import errores_mx from './../../helpers/errores_mx';

const Registro = (props) => {
	const [verPass, setVerPass] = useState('eye-off');
	const [cargando, setCargando] = useState(false);

	/*
    Creamos un state a partir de un objeto para guardar
    todo enla misma constante
    */
	const [formData, setFormData] = useState({
		email: '',
		pass: '',
		nombre: '',
	});

	/*
    Funcion flecha que nos permite registrar un usuario 
    en firebase auth por medio de correo y contraseña
    */
	const registrarUsuario = async () => {
		setCargando(true);
		try {
			/*
            Insertamos un usuario en auth con 
            usuario y contraseña
            */
			const nuevoUsuario =
				await firebase.auth.createUserWithEmailAndPassword(
					formData.email,
					formData.pass
				);
			console.log(nuevoUsuario);
			setCargando(false);
		} catch (e) {
			setCargando(false);
			console.log(JSON.stringify(e));
			Alert.alert('ERROR', errores_mx(e.code));
		}
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 50,
				marginHorizontal: 20,
			}}
		>
			<Image
				source={require('./../../../assets/images/peticon128.png')}
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
				onChangeText={(val) =>
					setFormData({
						...formData,
						['nombre']: val,
					})
				}
			/>

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

			<View
				style={{
					flex: 1,
					alignItems: 'center',
					width: '100%',
					position: 'relative',
				}}
			>
				<Feather
					name={verPass}
					color='tomato'
					size={16}
					style={{
						position: 'absolute',
						top: 25,
						right: 10,
						zIndex: 1001,
					}}
					onPress={() =>
						setVerPass(
							verPass === 'eye'
								? 'eye-off'
								: 'eye'
						)
					}
				/>
				<TextInput
					secureTextEntry={
						verPass === 'eye' ? false : true
					}
					keyboardType='number-pad'
					maxLength={8}
					autoCapitalize='none'
					autoCorrect={false}
					style={{
						position: 'relative',
						zIndex: 1,
						marginVertical: 15,
						width: '100%',
						borderRadius: 7,
						paddingVertical: 5,
						paddingHorizontal: 10,
						borderColor: 'tomato',
						borderWidth: 2,
						fontSize: 16,
					}}
					placeholder='Pin (de 8 a 6 dígitos)'
					editable={!cargando}
					value={formData.pass}
					onChangeText={(val) =>
						setFormData({
							...formData,
							['pass']: val,
						})
					}
				/>

				<View
					style={{
						display: cargando ? 'none' : 'flex',
					}}
				>
					<Button
						title='Registrarme'
						color='tomato'
						onPress={registrarUsuario}
					/>
				</View>
				<View
					style={{
						display: cargando ? 'flex' : 'none',
					}}
				>
					<ActivityIndicator
						size='large'
						color='tomato'
					/>
				</View>
			</View>
		</View>
	);
};

export default Registro;
