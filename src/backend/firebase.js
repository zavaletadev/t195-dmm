import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD53cxEYZob4RtbKxwhD4TkBlfCgPPHG_w',
	authDomain: 'firulapp195.firebaseapp.com',
	projectId: 'firulapp195',
	storageBucket: 'firulapp195.appspot.com',
	messagingSenderId: '84711801345',
	appId: '1:84711801345:web:c44b7f6beb2bebb6a8b600',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Crear una contante para cada servicio de firebase que vamos a utilizar
const database = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default {
	database,
	auth,
	storage,
};
