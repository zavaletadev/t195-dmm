const errores = (code) => {
	switch (code) {
		case 'auth/email-already-in-use':
			return 'Correo electrónico no disponible';
		case 'auth/invalid-email':
			return 'Formato de correo inválido';
	}
};
export default errores;
