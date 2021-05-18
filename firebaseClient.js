import firebase from "firebase";

const FIREBASE_CONFIG = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: "filmjack-1ff70.appspot.com",
	messagingSenderId: "1050260231829",
	appId: "1:1050260231829:web:bf51f411d221b11724ad9c",
};

export default function firebaseClient() {
	if (!firebase.apps.length) {
		firebase.initializeApp(FIREBASE_CONFIG);
	}
}
