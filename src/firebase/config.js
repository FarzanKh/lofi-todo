// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCly-PgW1pwo2GU2Km1kLYjGt2nsQdrrYk",
    authDomain: "lofi-focus.firebaseapp.com",
    projectId: "lofi-focus",
    storageBucket: "lofi-focus.appspot.com",
    messagingSenderId: "255035008310",
    appId: "1:255035008310:web:cc228a5bd6f0f6cd633f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}