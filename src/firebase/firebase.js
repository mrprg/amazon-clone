import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCH8F7AMuNG57dGXlZLU6P1UjTCk8ZZ06c",
    authDomain: "clone-d8694.firebaseapp.com",
    projectId: "clone-d8694",
    storageBucket: "clone-d8694.appspot.com",
    messagingSenderId: "686785649052",
    appId: "1:686785649052:web:607d3a4bb9bf5541409059",
    measurementId: "G-J3JDGCTKR3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };