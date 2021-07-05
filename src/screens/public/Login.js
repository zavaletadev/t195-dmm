import React from 'react';
import { Button, Text, View } from 'react-native';

const Login = (props) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Login.js</Text>
			<Button
				title='Al Home'
				onPress={() =>
					props.navigation.navigate('HomeDrawer')
				}
			/>
			<Button
				title='Al Registro'
				onPress={() =>
					props.navigation.navigate('Registro')
				}
			/>
		</View>
	);
};

export default Login;
