import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import GeneroItem from '../../components/GeneroItem';
import firebase from './../../backend/firebase';

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
    Un snapshot es una versión en caché de la 
    consulta, sincronizada con el servidor, atenta
    a cualquier cambio para que, de manera automática
    se actualice con el origen de datos
    */
	const snapGeneros = () => {
		firebase.database
			.collection('generos')
			.onSnapshot((snapShot) => {
				if (snapShot.size > 0) {
					const arrG = [];
					snapShot.forEach((doc) => {
						arrG.push({
							id: doc.id,
							...doc.data(),
						});
					});
					setGeneros(arrG);
				}
			});
	};

	/*
    Invocamos justo al inicio, la consulta de géneros
    */
	useEffect(() => {
		//getGeneros();
		snapGeneros();
	}, []);

	return (
		<FlatList
			data={generos}
			keyExtractor={(item) => item.id}
			renderItem={(item) => (
				<GeneroItem
					item={item.item}
					navigation={props.navigation}
				/>
			)}
		/>
	);
};

export default ListaGeneros;
