import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TarjetaCs extends Component {
	/*
    Podemos acceder a las propiedades de la clase
    utilizando el atributo
    this.props._NOM_PROP_
    */
	constructor() {
		super();
	}

	render() {
		/*
        Para imrpimir o viosualizar el contenido
        de una variable dentro del elemento de retorno
        utilizamos llaves y el elemento a visualizar
        {_NOM_ELEM_}
        */
		return (
			<View>
				<Text
					style={{ color: this.props.colorTexto }}
				>
					Nombre: {this.props.nombre}
				</Text>
				<Text
					style={{ color: this.props.colorTexto }}
				>
					Edad: {this.props.edad} años
				</Text>
				<Text
					style={{ color: this.props.colorTexto }}
				>
					Fecha nacimiento: {this.props.fechaNac}
				</Text>
				<Text
					style={{ color: this.props.colorTexto }}
				>
					Correo: {this.props.correo}
				</Text>
				<Text
					style={{ color: this.props.colorTexto }}
				>
					Teléfono: {this.props.telefono}
				</Text>
				<Text
					style={{ color: this.props.colorTexto }}
				>
					Matrícula: {this.props.matricula}
				</Text>
			</View>
		);
	}
}

export default TarjetaCs;
