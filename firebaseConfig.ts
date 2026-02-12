import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase (App Web)
const firebaseConfig = {
  apiKey: "AIzaSyCuZ2onvIJndyYLI6KS8WS1_eqNBSsPS_g",
  authDomain: "artisservices-f9b0e.firebaseapp.com",
  projectId: "artisservices-f9b0e",
  storageBucket: "artisservices-f9b0e.firebasestorage.app",
  messagingSenderId: "370031864419",
  appId: "1:370031864419:web:78c68b33bc6c38960c6656",
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Services utilisés
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export optionnel
export { firebaseConfig };