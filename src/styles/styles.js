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
		backgroundColor: '#ff577f',
	},
	fondoAmarillo: {
		backgroundColor: '#ff884b',
	},
	textoAmarilloClaro: {
		color: '#cdfffc',
	},
	textoAmarillo: {
		color: '#ff884b',
	},
	textoAzulClaro: {
		color: '#cdfffc',
	},
	textoAzul: {
		color: '#ff577f',
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
});

export default styles;
