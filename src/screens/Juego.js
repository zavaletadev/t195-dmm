import React, { useEffect, useState } from 'react';
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const Juego = (props) => {
	const [tiempo, setTiempo] = useState(60);
	const [color, setColor] = useState([
		'#dc3545',
		'#007bff',
	]);
	const textColor = ['ROJO', 'AZUL'];

	/**
	 * Creamos un hook para inicializar un intervalo de tiempo que espere
	 * siempre un segundo, a diferencia de los hooks que habíamos realizado
	 * con anterioridad, esta ocasión enganchamos el efecto para que se
	 * realice cada vez que se actualice el tiempo, de esta manera
	 * logramos que se actualice cada segundo
	 */
	useEffect(() => {
		const temporizador = setTimeout(() => {
			setTiempo(tiempo - 1);
		}, 1000);
	}, [tiempo]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginVertical: 20,
				}}
			>
				<Text
					style={{ flex: 1, textAlign: 'center' }}
				>
					<MaterialIcons
						name='timer'
						size={64}
						color='#000'
					/>
				</Text>
				<Text
					style={{
						flex: 1,
						textAlign: 'center',
						fontSize: 30,
					}}
				>
					{tiempo}
				</Text>
			</View>
			<View>
				<Text
					style={{
						fontSize: 40,
						alignSelf: 'center',
						marginVertical: 10,
					}}
				>
					COLOR
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
				}}
			>
				<TouchableOpacity
					style={{
						margin: 5,
						flex: 1,
						width: '100%',
						height: '100%',
						backgroundColor: '#dc3545',
						overflow: 'hidden',
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Image
						source={require('./../../assets/tap_left.png')}
						style={{ width: 100, height: 100 }}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						margin: 5,
						flex: 1,
						width: '100%',
						height: '100%',
						backgroundColor: '#007bff',
						overflow: 'hidden',
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Image
						source={require('./../../assets/tap_right.png')}
						style={{ width: 100, height: 100 }}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Juego;
