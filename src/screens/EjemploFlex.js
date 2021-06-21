import React from 'react';
import { SafeAreaView, View } from 'react-native';

const EjemploFlex = (props) => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					backgroundColor: '#542e71',
				}}
			/>
			<View
				style={{
					flex: 1,
					backgroundColor: '#fb3640',
				}}
			/>
			<View
				style={{
					flex: 1,
					backgroundColor: '#fdca40',
				}}
			/>
			<View
				style={{
					flex: 1,
					backgroundColor: '#a799b7',
					flexDirection: 'row',
				}}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: '#23049d',
					}}
				/>
				<View
					style={{
						flex: 1,
						backgroundColor: '#aa2ee6',
					}}
				/>
				<View
					style={{
						flex: 1,
						backgroundColor: '#ff79cd',
						flexDirection: 'column',
					}}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: '#2b2e4a',
						}}
					/>
					<View
						style={{
							flex: 1,
							backgroundColor: '#e84545',
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default EjemploFlex;
