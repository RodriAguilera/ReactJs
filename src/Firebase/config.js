// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQcnICVH6VAkYaUUWc4XYagWS1FpVyG_w",
  authDomain: "proyectorodria.firebaseapp.com",
  projectId: "proyectorodria",
  storageBucket: "proyectorodria.appspot.com",
  messagingSenderId: "461367523438",
  appId: "1:461367523438:web:4af3ac2d192fbfa4758e7f",
  measurementId: "G-JHYNCW3DST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)