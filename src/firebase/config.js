import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "XXXXXXXX",
    authDomain: "XXXXXXXX",
    projectId: "XXXXXXXX",
    storageBucket: "XXXXXXXX",
    messagingSenderId: "XXXXXXXX",
    appId: "XXXXXXXX"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };