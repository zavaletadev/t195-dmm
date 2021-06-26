import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GeneroItem = (props) => {
	return (
		<TouchableOpacity
			onPress={() =>
				props.navigation.navigate('ListaPeliculas')
			}
		>
			<View
				style={{
					margin: 20,
					flex: 1,
					padding: 30,
					backgroundColor: '#5AA9E6',
					shadowColor: '#333',
					shadowOpacity: 0.8,
					borderRadius: 10,
					shadowRadius: 10,
					shadowOffset: {
						height: 1,
						width: 1,
					},
					elevation: 5,
				}}
			>
				<Text
					style={{
						color: '#f9f9f9',
						fontSize: 18,
						fontWeight: 'bold',
					}}
				>
					<MaterialCommunityIcons
						name='popcorn'
						size={22}
					/>
					{'    '}
					{props.item.name}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default GeneroItem;
