import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyA8aA1P6iKR-OPKQsAOHT66L_xy9PrjMzQ',
	authDomain: 'sneak-peek-1.firebaseapp.com',
	projectId: 'sneak-peek-1',
	storageBucket: 'sneak-peek-1.appspot.com',
	messagingSenderId: '125793400276',
	appId: '1:125793400276:web:7048e106ece036a4349241',
	measurementId: 'G-E44R42FLFG',
};


firebase.initializeApp(firebaseConfig);


export default firebase;
