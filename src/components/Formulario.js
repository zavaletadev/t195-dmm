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
		Alert.alert('Aquí en la validación');
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
							Mi Switch
						</Text>
					</View>
				</View>

				<Button
					title='Validar'
					onPress={validaFormulario}
				/>
			</ScrollView>
			<StatusBar />
		</SafeAreaView>
	);
};

export default Formulario;
