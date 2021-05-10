import firebase from "firebase";

const FIREBASE_CONFIG = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: "filmjack-23d3e.appspot.com",
	messagingSenderId: "80255612822",
	appId: "1:80255612822:web:5f6308b45494dfa173cfb7",
};

export default function firebaseClient() {
	if (!firebase.apps.length) {
		firebase.initializeApp(FIREBASE_CONFIG);
	}
}
