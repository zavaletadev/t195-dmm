import React from 'react';
import {
	ActivityIndicator,
	Image,
	Text,
	View,
} from 'react-native';

const ProgressDialog = (props) => {
	return (
		<View
			style={{
				position: 'absolute',
				alignContent: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				zIndex: 1001,
			}}
		>
			<View
				style={{
					position: 'absolute',
					alignContent: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
					zIndex: 1,
					backgroundColor: '#000',
					opacity: 0.3,
				}}
			/>

			<View
				style={{
					backgroundColor: '#fff',
					position: 'relative',
					zIndex: 2,
					padding: 50,
					overflow: 'hidden',
					borderRadius: 25,
					opacity: 0.7,
					alignItems: 'center',
					alignContent: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					source={require('./../../assets/images/peticon64.png')}
					style={{ marginBottom: 20 }}
				/>
				<ActivityIndicator
					size='large'
					color='tomato'
				/>
				<Text
					style={{
						color: 'tomato',
						marginTop: 10,
					}}
				>
					Por favor espera...
				</Text>
			</View>
		</View>
	);
};

export default ProgressDialog;
