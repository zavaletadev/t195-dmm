import React, { useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Button,
	Image,
	Text,
	TextInput,
	View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import firebase from './../../backend/firebase';

import errores_mx from './../../helpers/errores_mx';

const Login = (props) => {
	const [verPass, setVerPass] = useState('eye-off');
	const [cargando, setCargando] = useState(false);

	/*
    Creamos un state a partir de un objeto para guardar
    todo enla misma constante
    */
	const [formData, setFormData] = useState({
		email: 'raul.zavaletazea@gmail.com',
		pass: '123456',
	});

	/*
    Funcion flecha para iniciar sesión
    */
	const iniciarSesion = async () => {
		setCargando(true);
		try {
			const usuario =
				await firebase.auth.signInWithEmailAndPassword(
					formData.email,
					formData.pass
				);

			/*
            Indicamos si el usuario no ha validado su cuenta
            */
			let mensajeBienvenida = `🖖🏼 Hola ${usuario.user.email}`;
			if (!usuario.user.emailVerified) {
				mensajeBienvenida +=
					'\n\nTu cuenta no está verificada ☹️\n\nPor favor revisa tu correo electrónico';
			}
			Alert.alert(
				'Bienvenido',
				mensajeBienvenida,
				[
					{
						text: 'Acceder',
						onPress: () =>
							props.navigation.navigate(
								'HomeDrawer'
							),
					},
				],
				{ cancelable: false }
			);

			setCargando(false);
		} catch (e) {
			console.log(JSON.stringify(e));
			setCargando(false);
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
						title='Iniciar sesión'
						color='tomato'
						onPress={iniciarSesion}
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

				<View style={{ marginTop: 30 }}>
					<Button
						title='Al Registro'
						onPress={() =>
							props.navigation.navigate(
								'Registro'
							)
						}
					/>
				</View>
			</View>
		</View>
	);
};

export default Login;
