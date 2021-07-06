import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import firebase from './../../backend/firebase';
import { FontAwesome5 } from '@expo/vector-icons';

const ListaGeneros = (props) => {
	// Crear un efecto al cargar el screen para
	//recuperar la colección de géneros de firestore
	const [generos, setGeneros] = useState([]);

	const getGeneros = async () => {
		/*
        El equivalente a un select * FROM _COLLECCIÓN_   
        fiebase.database.collection('_NOM_COLECCIÓN_).get()
        */
		const query = await firebase.database
			.collection('generos')
			.get();

		/*
        Query contiene, entre otras cosas, el número
        de registros de la consulta en un arreglo
        */

		if (query.size > 0) {
			/*
            Recorremos el arreglo de documentos
            */
			const arrG = [];
			query.forEach((doc) => {
				/*
                doc.id retorna el id de cada documento
                mientras que doc.data, retorna los campos
                del documento
                */
				arrG.push({
					id: doc.id,
					...doc.data(),
				});
			});
			setGeneros(arrG);
		}
	};

	/*
    Invocamos justo al inicio, la consulta de géneros
    */
	useEffect(() => {
		getGeneros();
	}, []);

	return (
		<FlatList
			data={generos}
			keyExtractor={(item) => item.id}
			renderItem={(item) => (
				<View
					style={{
						margin: 10,
						padding: 30,
						backgroundColor: 'tomato',
						borderRadius: 10,
					}}
				>
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
						{item.item.nombre}
					</Text>
				</View>
			)}
		/>
	);
};

export default ListaGeneros;
