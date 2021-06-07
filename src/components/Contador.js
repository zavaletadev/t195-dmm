import React from 'react';
import { View, Button, Text, Alert } from 'react-native';
const Contador = (props) => {
	/**
	 * VDOM
	 * Vrtual DOM (Document Object Model) y es la manera
	 * en que los navegador renderizan un sitio web
	 *
	 * STATES
	 * Los estado de RN son constantes que están
	 * enganchadas al renderizado de la aplicación
	 * Cuando modifica un estado, realmente no cambiamos
	 * a la variable original, estamos creando una copia
	 * para usarla
	 *
	 * Un estate contiene =
	 * 1.- el nombre de la variable de estado
	 * 2.- el nombre de la función que clonará
	 *     el nuevo contenido del state
	 * const useState(_NOM_ST_, _FN_ST_);
	 */

	let contador = 200;
	/**
	 * Constante que encapsula a una función anónima para
	 * transportarse a cualquier componente
	 */
	const disminuir = () => Alert.alert('Aqui en el -');

	return (
		<View style={{ flex: 1, flexDirection: 'column' }}>
			<View
				style={{
					flex: 3,
					justifyContent: 'center',
					alignContent: 'center',
				}}
			>
				{/**
				 * La prop onpress espera como valor una función
				 * anónima, ya sea desde su declaración o por medio
				 * de encapsulamiento
				 */}
				<Button
					title='+'
					onPress={() => {
						contador = contador + 1;
						console.log(contador);
						Alert.alert('Aqui  en el +');
					}}
				/>
			</View>
			<View
				style={{
					flex: 4,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						textAlign: 'center',
						fontSize: 100,
					}}
				>
					{/**
					 * Imprimimos el valor de contador
					 */}
					{contador}
				</Text>
			</View>
			<View
				style={{
					flex: 3,
					justifyContent: 'center',
					alignContent: 'center',
				}}
			>
				<Button
					title='-'
					/**
					 * Cuando invocamos a una constante
					 * que encapsula a una función Y necesita parámetros
					 * Debemos especificar que el código encapsulado
					 * debe ejecutarse hasta que se invoque
					 * al padre
					 * onPress={() => disminuir('HOLA MENOS')}
					 *
					 * Si la función encapsulada no tiene parámetros,
					 * se puede ejecutar desde la prop
					 * onPress={disminuir}
					 */
					onPress={disminuir}
				/>
			</View>
		</View>
	);
};

export default Contador;
