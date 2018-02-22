import * as firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyAnvP3e4V5Zyt-VqY1GIhI6Ay-LakOvTgA',
	authDomain: 'reactsonho.firebaseapp.com',
	databaseURL: 'https://reactsonho.firebaseio.com',
	projectId: 'reactsonho',
	storageBucket: 'reactsonho.appspot.com',
	messagingSenderId: '537121669615'
}

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export { db, auth }
