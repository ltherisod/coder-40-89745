// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//ejemplo de variable de entorno
//   apiKey: import.meta.env.VITE_API_KEY,
const firebaseConfig = {
  apiKey: "AIzaSyBGfBLabi4xJMQa9Rns67RNbOsuyywGfR4",
  authDomain: "coder-89745-40.firebaseapp.com",
  projectId: "coder-89745-40",
  storageBucket: "coder-89745-40.firebasestorage.app",
  messagingSenderId: "215174435208",
  appId: "1:215174435208:web:dae9cb274b2eec1662aa3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//OBTIENE FIRESTORE
export const db= getFirestore(app)