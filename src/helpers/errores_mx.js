const errores = (code) => {
	switch (code) {
		case 'auth/email-already-in-use':
			return 'Correo electrónico no disponible';
		case 'auth/invalid-email':
			return 'Formato de correo inválido';
		case 'auth/weak-password':
			return 'La contraseña debe contener como mínimo 6 caracteres';
	}
};
export default errores;
