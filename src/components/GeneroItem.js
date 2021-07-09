import React from 'react';

import {
	FontAwesome5,
	Feather,
	Fontisto,
} from '@expo/vector-icons';

import {
	Alert,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import firebase from './../backend/firebase';
const GeneroItem = (props) => {
	const eliminarGenero = async () => {
		Alert.alert(
			'Eliminar género',
			`¿Realmente deseas eliminar el género "${props.item.nombre}"?` +
				'\n\nEsta acción, no puede deshacerse.',
			[
				{
					text: 'Cancelar',
					onPress: null,
				},
				{
					text: 'Eliminar',
					onPress: async () => {
						await firebase.database
							.collection('generos')
							.doc(props.item.id)
							.delete();

						Alert.alert('Eliminado');
					},
					style: 'destructive',
				},
			]
		);
	};

	return (
		<View
			style={{
				flex: 1,
				margin: 10,
				padding: 30,
				backgroundColor: 'tomato',
				borderRadius: 10,
				flexDirection: 'row',
			}}
		>
			<View style={{ flex: 6 }}>
				<Text
					style={{
						color: '#fff',
						fontSize: 22,
					}}
				>
					<FontAwesome5
						name='tag'
						color='#fff'
						size={22}
					/>
					{'    '}
					{props.item.nombre}
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					marginRight: 10,
				}}
			>
				<TouchableOpacity
					style={{
						width: '100%',
						flex: 1,
						backgroundColor: '#fff',
						padding: 10,
						borderRadius: 10,
					}}
					onPress={() =>
						props.navigation.navigate(
							'EditarGenero',
							{
								id: props.item.id,
								nombre: props.item.nombre,
							}
						)
					}
				>
					<Feather
						name='edit'
						size={24}
						color='#000'
					/>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flex: 1,
				}}
			>
				<TouchableOpacity
					style={{
						width: '100%',
						flex: 1,
						backgroundColor: '#fff',
						padding: 10,
						borderRadius: 10,
					}}
					onPress={eliminarGenero}
				>
					<Fontisto
						name='trash'
						size={24}
						color='tomato'
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default GeneroItem;
