import React, { useState } from 'react';
import {
	Alert,
	Button,
	SafeAreaView,
	Text,
	View,
} from 'react-native';

import ProgressDialog from '../../components/ProgressDialog';

import MapView, {
	Callout,
	Marker,
} from 'react-native-maps';

import * as Location from 'expo-location';

import { FontAwesome5 } from '@expo/vector-icons';

const EjemploUbicacion = (props) => {
	const [map, setMap] = useState(null);
	const [cargando, setCargando] = useState(false);
	const [marcadorUteq, setMarcadorUteq] = useState({
		latitud: 20.6539495,
		longitud: -100.4082825,
		direccion: {
			calle: 'Avenida de la Union',
			numero: '2501',
			colonia: 'Unidad Nacional',
			cp: '76148',
			municipio: 'Querétaro, Qro.',
		},
		contacto: {
			telefono: '(442) 209 61 00',
			email: 'contacto@uteq.edu.mx',
		},
	});

	/**
	 * FF que permite geolocalizar al usuario
	 */
	const getUbicacion = async () => {
		setCargando(true);

		try {
			/*
            Pedimos el permiso de ubicacion
            */
			const { status } =
				await Location.requestForegroundPermissionsAsync();

			/*
            Si nos dieron permiso
            */
			if (status === 'granted') {
				/*
                Tomamos la ubicacion actual
                */
				const ubicActual =
					await Location.getCurrentPositionAsync({
						accuracy: Location.Accuracy.Highest,
					});

				console.log(
					JSON.stringify(ubicActual.coords)
				);

				setMarcadorUteq({
					...marcadorUteq,
					['latitud']: ubicActual.coords.latitude,
					['longitud']:
						ubicActual.coords.longitude,
				});
				setCargando(false);

				map.animateToRegion({
					latitude: ubicActual.coords.latitude,
					longitude: ubicActual.coords.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.1,
				});
			} else {
				Alert.alert(
					'ERROR',
					'Permiso de ubicación necesario'
				);
			}
		} catch (e) {
			Alert.alert(e.toString());
		}
	};

	return (
		<>
			{
				/**
				 * Condicional verdadero
				 * Podemos utilizar la condicional
				 * implicitamente verdadera
				 * cuando solo nos interesa el valor
				 * true, pero no hay else
				 */
				cargando && <ProgressDialog />
			}

			<View style={{ flex: 1 }}>
				<View
					style={{
						position: 'absolute',
						zIndex: 1001,
						width: '100%',
						paddingVertical: 10,
						backgroundColor: 'tomato',
					}}
				>
					<Button
						title='Mi ubicación'
						color='black'
						onPress={getUbicacion}
					/>
				</View>
				<MapView
					// Generamos una refencia al mapa
					ref={(map) => setMap(map)}
					initialRegion={{
						latitude: marcadorUteq.latitud,
						longitude: marcadorUteq.longitud,
						latitudeDelta: 0.1,
						longitudeDelta: 0.1,
					}}
					provider='google'
					style={{
						flex: 1,
						overflow: 'hidden',
						zIndex: 1,
					}}
				>
					<Marker
						coordinate={{
							latitude: marcadorUteq.latitud,
							longitude:
								marcadorUteq.longitud,
						}}
					>
						<Callout>
							<View style={{ padding: 10 }}>
								<Text
									style={{
										fontSize: 18,
										fontWeight: 'bold',
										marginBottom: 10,
									}}
								>
									Uteq
								</Text>

								<Text
									style={{
										fontSize: 14,
										fontWeight: '400',
									}}
								>
									{
										marcadorUteq
											.direccion.calle
									}
									{' #'}
									{
										marcadorUteq
											.direccion
											.numero
									}
									{'\n'}
									Col.
									{
										marcadorUteq
											.direccion
											.colonia
									}
									{'\n'}
									C.P.{' '}
									{
										marcadorUteq
											.direccion.cp
									}
									{'\n'}
									{
										marcadorUteq
											.direccion
											.municipio
									}
									{'\n'}
									{'\n'}
									<FontAwesome5 name='phone-alt' />{' '}
									{
										marcadorUteq
											.contacto
											.telefono
									}
									{'\n'}
									<FontAwesome5 name='envelope' />{' '}
									{
										marcadorUteq
											.contacto.email
									}
								</Text>
							</View>
						</Callout>
					</Marker>
				</MapView>
			</View>
		</>
	);
};

export default EjemploUbicacion;
