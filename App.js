import React from 'react';
import {
	Button,
	Image,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Switch,
	Text,
	View,
} from 'react-native';
import TableroAjedrez from './src/components/TableroAjedrez';

import { Entypo } from '@expo/vector-icons';

// const App = () => {
// 	return (
// 		<SafeAreaView
// 			style={{
// 				flex: 1,
// 			}}
// 		>
// 			<View
// 				style={{
// 					flex: 1,
// 					backgroundColor: '#542e71',
// 				}}
// 			/>
// 			<View
// 				style={{
// 					flex: 1,
// 					backgroundColor: '#fb3640',
// 				}}
// 			/>
// 			<View
// 				style={{
// 					flex: 1,
// 					backgroundColor: '#fdca40',
// 				}}
// 			/>
// 			<View
// 				style={{
// 					flex: 1,
// 					backgroundColor: '#a799b7',
// 					flexDirection: 'row',
// 				}}
// 			>
// 				<View
// 					style={{
// 						flex: 1,
// 						backgroundColor: '#23049d',
// 					}}
// 				/>
// 				<View
// 					style={{
// 						flex: 1,
// 						backgroundColor: '#aa2ee6',
// 					}}
// 				/>
// 				<View
// 					style={{
// 						flex: 1,
// 						backgroundColor: '#ff79cd',
// 						flexDirection: 'column',
// 					}}
// 				>
// 					<View
// 						style={{
// 							flex: 1,
// 							backgroundColor: '#2b2e4a',
// 						}}
// 					/>

// 					<View
// 						style={{
// 							flex: 1,
// 							backgroundColor: '#e84545',
// 						}}
// 					/>
// 				</View>
// 			</View>
// 		</SafeAreaView>
// 	);
// };

/*
Existen diversas maneras de generar un estilo en RN
Todas ellas, basadas en la versatilidad del diseño con 
CSS
1.- Estilos directamente sobre los componentes
    Los estilos sobre compontntes deben ser porops complejas, específicamente
    objetos
2.- Crear un objeto de estilos para el componente padre y todos sus hijos
3.- Crear un componente externo de estilos
*/

// const App = (props) => {
// 	return <TableroAjedrez />;
// };

const App = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					backgroundColor: '#185adb',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/**
				 * Imagenes:
				 * Siempre agregar ancho y alto
				 *
				 * Imagen a partir de una URL
				 */}
				{/* <Image
					source={{
						uri: 'https://patijinich.com/es/wp-content/uploads/sites/3/2019/08/804-tacos-campechanos-de-suadero-longaniza-y-chicharron-con-salsa-callejera.jpg',
					}}
					style={{
						width: 150,
						height: 150,
					}}
				/> */}
				{/**
				 * Imagen a partir de un archivo local
				 */}
				<Image
					source={require('./assets/media/images/fotoperfil.jpg')}
					style={{
						width: 150,
						height: 150,
						resizeMode: 'cover',
						borderRadius: 75,
						marginBottom: 20,
					}}
				/>
				<Text
					style={{
						fontSize: 22,
						color: '#feddbe',
						marginBottom: 20,
					}}
				>
					Raúl Zavaleta Zea
				</Text>

				<Text
					style={{
						fontSize: 26,
						fontWeight: 'bold',
						color: '#ffc947',
					}}
				>
					Profe &amp; Arquitecto de Apps
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					backgroundColor: '#ffc947',
				}}
			>
				<Text style={{ fontSize: 33 }}>
					<Entypo
						name='old-phone'
						size={33}
						color='#0a1931'
					/>
					{'\n'}
					442 2048329
				</Text>

				<Button title='Llamar' color='#0000FF' />
			</View>
		</View>
	);
};

export default App;
