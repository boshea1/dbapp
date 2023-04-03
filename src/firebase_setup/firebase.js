// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDObMjaXpt9vFq4yf5u7vHrfXaGLet_GvY",
  authDomain: "databaseapp-cff07.firebaseapp.com",
  projectId: "databaseapp-cff07",
  storageBucket: "databaseapp-cff07.appspot.com",
  messagingSenderId: "184547253467",
  appId: "1:184547253467:web:ba55a653abf99699bfc0fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)