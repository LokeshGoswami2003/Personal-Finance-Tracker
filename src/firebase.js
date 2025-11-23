// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore,doc,setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6_PWFygQfOAjgNb_4BKFn0hoMWtC-ud8",
  authDomain: "finance-tracker-bb97b.firebaseapp.com",
  projectId: "finance-tracker-bb97b",
  storageBucket: "finance-tracker-bb97b.firebasestorage.app",
  messagingSenderId: "189748221686",
  appId: "1:189748221686:web:e68a6b9918907ac6283ed7",
  measurementId: "G-N0V6J2FGL7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {db,auth,provider,setDoc,doc};