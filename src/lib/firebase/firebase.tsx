
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCIQ3a-ursuQqyOSF4cex3ApkJla9gL0Pk",
    authDomain: "react-firebase-41fec.firebaseapp.com",
    databaseURL: "https://react-firebase-41fec-default-rtdb.firebaseio.com",
    projectId: "react-firebase-41fec",
    storageBucket: "react-firebase-41fec.appspot.com",
    messagingSenderId: "923988938490",
    appId: "1:923988938490:web:83d843981c387eb5e0c343",
    measurementId: "G-V4VG0T8XN3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const ticketDB = collection(db, "tickets-packages");

export { auth, provider,db,ticketDB }

