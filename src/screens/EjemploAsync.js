import React, { useEffect, useState } from 'react';

import {
	View,
	Text,
	FlatList,
	RefreshControl,
	Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GeneroItem from '../components/GeneroItem';

const EjemploAsync = (props) => {
	/**
	 * React permite ejecutar codigo en un punto
	 * particular del ciclo de vida de un screen
	 *
	 * Al inicio
	 * Al actualizarse
	 * Al cerrar un screen
	 *
	 * Podemos acceder a estos eventos por medio
	 * de un efecto
	 *
	 * Un efecto es una función anónima que se
	 * ejecuta dentro del componente
	 *
	 */
	//Efecto que se ejecuta al inicio
	useEffect(() => {
		/*
        Podemos programar directo en un efecto
        o bien, podemos encapsular la funcionalidad
        de un efecto, en una constante
        */
		//generosPromise();
		generosAsync();
	}, []);

	/*
    Async es la manera de indicarle a una función 
    que se ejecutará en segundo plano, lo mismo 
    que realiza Fetch sin la necesidad de concatenar
    callbacks

    Podemos indicar que una funcioón se ejecutará
    en segundo plano si le agregamos la palabra 
    async y cuando debamos esperar la resolución
    de un elemento utilizamos la palabra await
    */
	const generosAsync = async () => {
		try {
			const response = await fetch(
				'https://api.themoviedb.org/3/genre/movie/list?api_key=545fc94d35f8194b259e5a97845b5e67&language=es-MX'
			);

			const json = await response.json();

			setGeneros(json.genres);
			setCargando(false);
		} catch (e) {
			Alert.alert('ERRR');
		}
	};

	const generosPromise = () => {
		fetch(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=545fc94d35f8194b259e5a97845b5e67&language=es-MX'
		)
			.then((response) => response.json())
			.then((json) => {
				setGeneros(json.genres);
				setCargando(false);
			})
			.catch(() => Alert.alert('ERROR'));
	};

	const [cargando, setCargando] = useState(true);
	const [generos, setGeneros] = useState([]);
	return (
		<FlatList
			refreshControl={
				<RefreshControl refreshing={cargando} />
			}
			ListHeaderComponent={
				<View
					style={{
						padding: 30,
						backgroundColor: '#FF6392',
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
					}}
				>
					<Text
						style={{
							color: '#F9F9F9',
							fontSize: 24,
						}}
					>
						<MaterialCommunityIcons
							name='filmstrip-box'
							size={24}
						/>
						{'    '}
						Géneros
					</Text>
				</View>
			}
			data={generos}
			renderItem={(item) => (
				<GeneroItem
					item={item.item}
					navigation={props.navigation}
				/>
			)}
			keyExtractor={(item) => `g-${item.id}`}
		/>
	);
};

export default EjemploAsync;
