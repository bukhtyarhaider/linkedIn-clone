import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDWmqv6pakaHrCtv6hhJjjwyZGS1vh03Cw",
    authDomain: "linkedin-clone-705b2.firebaseapp.com",
    projectId: "linkedin-clone-705b2",
    storageBucket: "linkedin-clone-705b2.appspot.com",
    messagingSenderId: "1025657421885",
    appId: "1:1025657421885:web:861e4c7f9ebb0d8983ea54"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


export { db , auth };


