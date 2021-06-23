import React from 'react';
import {
	Alert,
	Button,
	FlatList,
	RefreshControl,
} from 'react-native';
import HeaderFlatList from '../components/HeaderFlatList';
import UserItem from '../components/UserItem';

const EjemploFetch = (props) => {
	const [refreshControl, setRefreshControl] =
		React.useState(false);
	const [usuarios, setUsuarios] = React.useState([]);

	return (
		<FlatList
			data={usuarios}
			renderItem={(item) => <UserItem />}
			/*
            Evento de inicio para cargar
            elementos desde que se renderiza el 
            Screen
            */
			refreshControl={
				<RefreshControl
					refreshing={refreshControl}
				/>
			}
			ListHeaderComponent={<HeaderFlatList />}
			/*
            Permite el equivalente a SwipeRefresh
            Evento
            */
			refreshing={true}
			ListFooterComponent={
				<Button
					title='Cargar datos'
					onPress={() => {
						/*
                        Javascript es un lenguaje de prog.
                        DE UN SOLO HILO (SINGLE THREAD) 

                        Las promesas son estructuras de código
                        que permiten aislar el funcionamiento
                        de una acción y esperar por separado 
                        la respuesta sin tener que esperar 
                        en todo el hilo principal
                        */
						//cargar datos de usuarios desde el servicio
						//https://reqres.in/api/users?per_page=12

						/*
                        Las promesas son funciones que retornar un valor
                        de manera asincrona y el tiempo de respuesta varía
                        en función de la petición
                        fetch(_URL_)
                        .then(_RESP_PROMESA_)
                        .catch(_ERROR_)
                        */
						setRefreshControl(true);
						fetch(
							'https://reqres.in/api/users?per_page=12'
						)
							.then((response) =>
								response.json()
							)
							.then((json) => {
								//console.log(json);
								setRefreshControl(false);
								/*
                                SI DATA ES UNA ARREGLO, LO
                                PODEMOS ITERAR PARA VER CADA ELEMENTO
                                */
								//Creamos una rreglo aux
								//para agregar cada elemento del arreglo
								//del servicio
								const arrAux = [];
								json.data.forEach(
									(usuario) => {
										console.log(
											usuario.first_name,
											usuario.last_name
										);
										//Por cada elemento en el servicio
										//lo agregamos al arreglo aux
										arrAux.push({
											id: `user-${usuario.id}`,
											nombre: 'Raúl',
											apellido1:
												'Zavaleta',
											correo: 'raul.zavaletazea@uteq.edu.mx',
											avatar: 'https://pbs.twimg.com/profile_images/1265406472042790913/-0A7qKdj.jpg',
										});
									}
								);

								//Indicamos que los datos del arreglo se agreguen al
								//state
								setUsuarios(arrAux);
							})
							.catch(() => {
								setRefreshControl(false);
								Alert.alert('ERROR');
							});
					}}
				/>
			}
		/>
	);
};

export default EjemploFetch;
