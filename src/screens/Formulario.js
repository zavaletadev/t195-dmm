import React, { useState } from 'react';
import {
	Alert,
	Button,
	Platform,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Switch,
	Text,
	TextInput,
	View,
} from 'react-native';

import estilos from './../styles/styles';

const Formulario = (props) => {
	/**
	 * Para tomar los valores de un formulario
	 * creamos variables de estado para almacenar
	 * los valores insertados
	 */
	const [nombre, setNombre] = useState('');
	const [usuario, setUsuario] = useState('');
	const [rfc, setRfc] = useState('');
	const [acercaDe, setAcercaDe] = useState('');
	const [telefono, setTelefono] = useState('');
	const [valorSwitch, setValorSwitch] = useState(false);

	/**
	 * Constante que encapsula la validación
	 * del formulario
	 */
	const validaFormulario = () => {
		/**
		 * Validar lo siguiente:
		 * Nombre completo -> Min 3 caracteres
		 * Usuario -> Min 6 caracteres (Sin espacios)
		 * RFC -> 13 dcaracteres
		 * Sobre mi -> Puede ir vació, pero si tiene contenido
		 * mínimo 10 caracteres
		 * Telefono -> 10 caracteres
		 * Solo validar si el switch está encendido/seleccionado
		 */

		/**
		 * La lógica positiva se centra en programar cuando
		 * se cumplen las condiciones esperadas
		 *
		 * La lógica negativa se centra en programar cuando
		 * NO se cumplen las condiciones esperadas
		 */

		//Si el nombre no cumple con la validación
		if (nombre.length < 3) {
			/**
			 * Alert permite lo soguientes parámetros:
			 * 1.- TITULO
			 * 2.- MENSAJE
			 * 3.- Botones (N...)
			 * 4.- Config de la alerta
			 */
			Alert.alert(
				//Titulo
				'ERROR',
				//Mensaje
				'Nombre menor a 3 caracteres',
				//Arreglo de objetos de botón
				[
					{
						text: 'Corregir',
						onPress: null,
					},
				]
			);

			//Terminar la ejecución
			return;
		}

		//Si el usuario tiene menos de 6 caracteres o espacios
		if (
			usuario.length < 6 ||
			usuario.indexOf(' ') !== -1
		) {
			Alert.alert(
				'ERROR',
				'*usuario de más de 6 caracteres\n*sin espacios',
				[
					{
						text: 'Corregir',
						onPress: () => setUsuario(''),
					},
				]
			);
			return;
		}

		if (rfc.length < 13) {
			Alert.alert('ERROR', 'RFC de 13 caracteres', [
				{
					text: 'Corregir',
					onPress: () => setRfc(''),
				},
			]);
			return;
		}

		if (acercaDe.length != 0 && acercaDe.length < 10) {
			Alert.alert(
				'ERROR',
				'Escribe más sobre ti o déjalo en blanco',
				[{ text: 'Corregir', onPress: null }]
			);
			return;
		}

		if (telefono.length < 10) {
			Alert.alert('ERROR', 'Teléfono a 10 dígitos', [
				{
					text: 'Corregir',
					onPress: () => setTelefono(''),
				},
			]);
			return;
		}

		if (!valorSwitch) {
			Alert.alert(
				'ERROR',
				'Aceptar guardar tus datos ',
				[
					{
						text: 'Corregir',
						onPress: null,
					},
				]
			);
			return;
		}

		/**
		 * Podemos enviar parámetros entre screens utiizando
		 * el segundo argumento de la función navigate
		 * props.navigation.navigate('_SIG_SCREEN_', {_OBJ_PARAMS_})
		 */
		props.navigation.navigate('EjemploBD', {
			nombre: nombre,
			usuario: usuario,
			rfc: rfc,
			telefono: telefono,
			valorSwitch: valorSwitch,
		});
	};

	return (
		<SafeAreaView style={estilos.contenedor}>
			<ScrollView>
				<Text
					style={{
						marginVertical: 20,
						fontSize: 30,
						textAlign: 'center',
					}}
				>
					Formulario.js
				</Text>
				{/**
				 * ReactNative permite utilizar los campos de texto
				 * con la librería (clase) TextInput
				 */}
				<TextInput
					style={
						Platform.OS === 'ios'
							? estilos.inputIos
							: estilos.inputAndroid
					}
					placeholder='Nombre completo'
					keyboardType='default'
					autoCapitalize='words'
					maxLength={100}
					value={nombre}
					onChangeText={(text) => setNombre(text)}
				/>
				<TextInput
					style={
						Platform.OS === 'ios'
							? estilos.inputIos
							: estilos.inputAndroid
					}
					placeholder='Usuario'
					keyboardType='default'
					autoCapitalize='none'
					autoCorrect={false}
					maxLength={12}
					value={usuario}
					onChangeText={(text) =>
						setUsuario(text)
					}
				/>
				<TextInput
					style={
						Platform.OS === 'ios'
							? estilos.inputIos
							: estilos.inputAndroid
					}
					placeholder='RFC'
					keyboardType='default'
					autoCapitalize='characters'
					autoCorrect={false}
					maxLength={13}
					value={rfc}
					onChangeText={(text) => setRfc(text)}
					editable
				/>
				<TextInput
					style={
						Platform.OS === 'ios'
							? estilos.inputIos
							: estilos.inputAndroid
					}
					placeholder='Sobre mi'
					keyboardType='default'
					autoCapitalize='sentences'
					autoCorrect
					multiline
					numberOfLines={5}
					value={acercaDe}
					onChangeText={(text) =>
						setAcercaDe(text)
					}
				/>
				<TextInput
					style={
						Platform.OS === 'ios'
							? estilos.inputIos
							: estilos.inputAndroid
					}
					placeholder='Teléfono'
					keyboardType='phone-pad'
					maxLength={10}
					value={telefono}
					onChangeText={(text) =>
						setTelefono(text)
					}
				/>
				<View
					style={{
						...estilos.contenedor,
						flexDirection: 'row',
						margin: 10,
					}}
				>
					<View
						style={{
							flex: 1,
						}}
					>
						<Switch
							value={valorSwitch}
							onValueChange={() =>
								setValorSwitch(!valorSwitch)
							}
							trackColor={{
								false: '#000000',
								true: '#00FF00',
							}}
							thumbColor={
								valorSwitch
									? '#ccc'
									: '#666'
							}
							ios_backgroundColor='#000000'
						/>
					</View>
					<View
						style={{
							flex: 4,
							justifyContent: 'center',
						}}
					>
						<Text style={{ fontSize: 16 }}>
							Acepto guardar mis datos
						</Text>
					</View>
				</View>

				<Button
					title='Validar'
					onPress={validaFormulario}
				/>

				<Button
					title='Al menu'
					color='#000'
					onPress={() => {
						Alert.alert(
							'Al incio',
							'¿Deseas regresar?',
							[
								{
									text: 'Neutral',
									//OnPress: null -> cierra la alerta
									onPress: null,
									style: 'cancel',
								},

								{
									text: 'Negative',
									onPress: null,
									style: 'destructive',
								},

								{
									text: 'Positive',
									onPress: () =>
										props.navigation.navigate(
											'Menu'
										),
									style: 'default',
								},
							]
						);
					}}
				/>
			</ScrollView>
			<StatusBar />
		</SafeAreaView>
	);
};

export default Formulario;
