import React from 'react';
import { Text, View } from 'react-native';

const EjemploBD = (props) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					fontSize: 22,
					paddingVertical: 10,
				}}
			>
				{props.route.params.nombre}
			</Text>
			<Text
				style={{
					fontSize: 22,
					paddingVertical: 10,
				}}
			>
				{props.route.params.usuario}
			</Text>
		</View>
	);
};

export default EjemploBD;
