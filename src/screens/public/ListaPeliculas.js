import React from 'react';
import { Text, View } from 'react-native';

const ListaPeliculas = (props) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Lista de películas</Text>
		</View>
	);
};

export default ListaPeliculas;
