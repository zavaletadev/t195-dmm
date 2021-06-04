/**
 * Podemos generar un objeto global de estilo
 * desde un archivo para poder reutilizarlo
 * en cualquier componente
 */
import { StyleSheet } from 'react-native';
import colores from './colores';

const styles = StyleSheet.create({
	contenedor: {
		flex: 1,
	},
	centrado: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	fondoAzul: {
		backgroundColor: '#185adb',
	},
	fondoAmarillo: {
		backgroundColor: '#ffc947',
	},
	textoAmarilloClaro: {
		color: '#feddbe',
	},
	textoAmarillo: {
		color: '#ffc947',
	},
	textoAzulClaro: {
		color: '#185adb',
	},
	textoAzul: {
		color: '#0a1931',
	},
	imagenPerfil: {
		width: 150,
		height: 150,
		resizeMode: 'cover',
		borderRadius: 75,
		marginBottom: 20,
	},
	titulo: {
		fontSize: 22,
		marginBottom: 20,
	},
	subtitulo: {
		fontSize: 26,
		fontWeight: 'bold',
	},
	icoContacto: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colores.textoAzul,
		marginBottom: 30,
	},
	inputIos: {
		marginHorizontal: 10,
		marginVertical: 5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderWidth: 2,
		borderColor: '#808080',
		borderRadius: 10,
	},
	inputAndroid: {
		marginHorizontal: 10,
		marginVertical: 5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderBottomWidth: 2,
		borderColor: '#808080',
	},
});

export default styles;
