import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const HeaderFlatList = (props) => {
	return (
		<View
			style={{
				padding: 30,
				backgroundColor: '#404E4D',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text style={{ color: '#ccc', fontSize: 30 }}>
				<FontAwesome5
					name='users'
					color='#ccc'
					size={30}
				/>
				{'   '}
				Lista de usuarios
			</Text>
		</View>
	);
};

export default HeaderFlatList;
