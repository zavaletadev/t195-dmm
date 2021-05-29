import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import TableroAjedrez from './src/components/TableroAjedrez';

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

const App = (props) => {
	return <TableroAjedrez />;
};

export default App;
