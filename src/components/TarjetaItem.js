import React from 'react';
import {
	ScrollView,
	View,
	Text,
	Image,
	TouchableOpacity,
	Alert,
} from 'react-native';

import {
	AntDesign,
	Entypo,
	FontAwesome5,
} from '@expo/vector-icons';

const TarjetaItem = (props) => {
	return (
		/*
                    En RN la prop key
                    hace referencia a un valor 
                    String
                    */
		<View
			key={`e-${props.indice}`}
			style={{
				padding: 30,
				backgroundColor: '#595959',
				marginVertical: 10,
				marginHorizontal: 15,
				borderRadius: 20,
				flex: 1,
				flexDirection: 'row',
			}}
		>
			<View
				style={{
					flex: 2,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					onPress={() => {
						Alert.alert('Click a la imagen');
					}}
				>
					<Image
						source={{
							uri: 'https://www.ciudadypoder.mx/wp-content/uploads/2018/10/tacos-de-pastor.jpg',
						}}
						style={{
							width: 100,
							height: 100,
							borderRadius: 50,
							marginBottom: 20,
						}}
					/>
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 18,
						color: '#f2f2f2',
					}}
				>
					<AntDesign
						name='user'
						color='#cccccc'
						size={22}
					/>
					{'   '}
					{props.elemento}
				</Text>
			</View>

			<View
				style={{
					flex: 1,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					style={{
						padding: 10,
						borderRadius: 10,
						backgroundColor: '#484D6D',
					}}
				>
					<Text>
						<Entypo
							name='phone'
							color='#A5A5A5'
							size={24}
						/>
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						padding: 10,
						borderRadius: 10,
						backgroundColor: '#484D6D',
					}}
				>
					<Text>
						<Entypo
							name='mail'
							color='#A5A5A5'
							size={24}
						/>
					</Text>
				</TouchableOpacity>

				{/**
				 * ToichableOpacity nos permite
				 * implementar un evento clikc (press)
				 * a cualquier componente
				 */}
				<TouchableOpacity
					style={{
						padding: 10,
						borderRadius: 10,
						backgroundColor: '#484D6D',
					}}
				>
					<Text>
						<FontAwesome5
							name='facebook'
							color='#A5A5A5'
							size={24}
						/>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TarjetaItem;
