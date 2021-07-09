import React, { useState } from 'react';
import {
	Alert,
	Button,
	TextInput,
	View,
} from 'react-native';
import firebase from './../../backend/firebase';

const EditarGenero = (props) => {
	/*
    Inicializamos los states con los valores del genero
    que nos envía la ventana anterior (El género seleccionado)
    */
	const [generoId, setGeneroId] = useState(
		props.route.params.id
	);
	const [genero, setGenero] = useState(
		props.route.params.nombre
	);

	/*
    edición de un documento en una colección
    */
	const editaDoc = async () => {
		/*
        En un documento, la función update 
        actualiza los elementos indicados en el objeto,
        manteniendo los valores que NO se mencionaron 
        en el objeto  a actualizar
        */
		await firebase.database
			.collection('generos')
			.doc(generoId)
			.update({
				nombre: genero,
			});

		/*
        Por su parte,  la función set 
        actualiza los elementos indicados en el objeto,
        eliminando todo los valores que NO se mencionaron 
        en el objeto  a actualizar
         */
		// await firebase.database
		// 	.collection('generos')
		// 	.doc(generoId)
		// 	.set({
		// 		nombre: genero,
		// 	});

		Alert.alert(
			'Edición finalizada',
			'Género actualizado',
			[
				{
					text: 'Continuar',
					onPress: () =>
						props.navigation.navigate(
							'ListaGeneros'
						),
				},
			]
		);
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
				title='Guardar cambios'
				color='tomato'
				onPress={editaDoc}
			/>
		</View>
	);
};

export default EditarGenero;
