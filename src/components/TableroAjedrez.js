import React from 'react';
import { SafeAreaView, View } from 'react-native';

const TableroAjedrez = (props) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View
					style={{
						flex: 1,
						backgroundColor: '#000',
					}}
				></View>
				<View
					style={{
						flex: 1,
						backgroundColor: '#fff',
					}}
				></View>
			</View>
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View
					style={{
						flex: 1,
						backgroundColor: '#fff',
					}}
				></View>
				<View
					style={{
						flex: 1,
						backgroundColor: '#000',
					}}
				></View>
			</View>
		</SafeAreaView>
	);
};

export default TableroAjedrez;
