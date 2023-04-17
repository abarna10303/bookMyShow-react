import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCS5PyZRwxc-3yFZiH4zTljgSOjxG8IGc",
  authDomain: "sign-up-a872f.firebaseapp.com",
  databaseURL: "https://sign-up-a872f-default-rtdb.firebaseio.com",
  projectId: "sign-up-a872f",
  storageBucket: "sign-up-a872f.appspot.com",
  messagingSenderId: "506394549209",
  appId: "1:506394549209:web:8afd24fb38a703c8e757c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)