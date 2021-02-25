import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB6pKsteHdhKtqZujSzLmJ6XHj5hBJ2SVs",
	authDomain: "whatsappweb-30ebd.firebaseapp.com",
	projectId: "whatsappweb-30ebd",
	storageBucket: "whatsappweb-30ebd.appspot.com",
	messagingSenderId: "496055914466",
	appId: "1:496055914466:web:e33da9f659aac5111af3bb",
	measurementId: "G-GCM2BXZYEB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
