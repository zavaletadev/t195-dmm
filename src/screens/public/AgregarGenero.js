import React, { useState } from 'react';
import {
	Alert,
	Button,
	TextInput,
	View,
} from 'react-native';
import firebase from './../../backend/firebase';

const AgregarGenero = (props) => {
	const [genero, setGenero] = useState('');

	/*
    Inserción de un documento en una colección
    con un id personalizado
    */
	const insertaDocId = async () => {
		await firebase.database
			.collection('generos')
			.doc('CG-156789')
			.set({
				nombre: genero,
			});
		console.log('Agregado');
	};

	/*
    Inserción de un documento con un id 
    gestionado por FireStore
    */
	const insertaDoc = async () => {
		const nuevoDoc = await firebase.database
			.collection('generos')
			.add({
				nombre: genero,
			});
		Alert.alert(`Doc: ${nuevoDoc.id} insertado`);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				marginHorizontal: 10,
			}}
		>
			<TextInput
				style={{
					paddingVertical: 10,
					paddingHorizontal: 20,
					borderWidth: 2,
					borderColor: 'tomato',
					borderRadius: 5,
					width: '100%',
					marginBottom: 15,
				}}
				keyboardType='default'
				autoCapitalize='words'
				autoCorrect
				maxLength={120}
				value={genero}
				onChangeText={(val) => setGenero(val)}
			/>
			<Button
				title='+ Genero'
				color='tomato'
				onPress={() => {
					//insertaDocId(); //con id propio
					insertaDoc(); // con id automático
				}}
			/>
		</View>
	);
};

export default AgregarGenero;
