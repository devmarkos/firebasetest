// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6XIbsKRrrDfxHfxCkqr8apgCC5WIRZiI",
  authDomain: "fir-tut-328d4.firebaseapp.com",
  projectId: "fir-tut-328d4",
  storageBucket: "fir-tut-328d4.appspot.com",
  messagingSenderId: "695347012663",
  appId: "1:695347012663:web:67ae5f22d1d692a2e4cbb2",
  measurementId: "G-Q1P3HNCCPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);