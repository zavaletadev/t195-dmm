import React, { useState } from 'react';
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const JuegoDificil = (props) => {
	const [tiempo, setTiempo] = useState(60);
	const [color, setColor] = useState([
		'#dc3545',
		'#ffc107',
		'#007bff',
	]);
	const [textColor, setTextoColor] = useState([
		'ROJO',
		'AMARILLO',
		'AZUL',
	]);

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
					Color
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
						backgroundColor: '#ffc107',
						overflow: 'hidden',
						borderRadius: 20,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Image
						source={require('./../../assets/tap_center.png')}
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

export default JuegoDificil;
