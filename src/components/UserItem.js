import React from 'react';

import { View, Text, ImageBackground } from 'react-native';

const UserItem = (props) => {
	return (
		<View
			style={{
				paddingHorizontal: 20,
				paddingVertical: 10,
				backgroundColor: '#ccc',
				marginVertical: 5,
			}}
		>
			<ImageBackground
				source={{
					uri: 'https://pbs.twimg.com/profile_images/1265406472042790913/-0A7qKdj.jpg',
				}}
				style={{ width: 100, height: 100 }}
			/>
			<Text
				style={{ fontSize: 24, fontWeight: 'bold' }}
			>
				AQUI MI NOMBRE COMPLETO
			</Text>

			<Text
				style={{ fontSize: 20, fontWeight: '100' }}
			>
				AQUI MI CORREO
			</Text>

			<Text
				style={{ fontSize: 16, fontWeight: '100' }}
			>
				ICO
				{'        '}
				ICO
				{'        '}
				ICO
			</Text>
		</View>
	);
};

export default UserItem;
