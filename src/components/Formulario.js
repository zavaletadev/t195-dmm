import React from 'react';
import {
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
					value='ZAZR880529GB5'
					editable={false}
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
							value={true}
							trackColor={{
								false: '#FF0000',
								true: '#0000FF',
							}}
							thumbColor='#ADA'
							ios_backgroundColor='#FF0000'
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
			</ScrollView>

			<StatusBar />
		</SafeAreaView>
	);
};

export default Formulario;
