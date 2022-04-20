// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //YOUR FIREBASE CONFIG HERE
  apiKey: "AIzaSyAwd_0WLRozCJmCSs8ECw_r4chHSRcVZZM",
  authDomain: "todolist-2fcb6.firebaseapp.com",
  projectId: "todolist-2fcb6",
  storageBucket: "todolist-2fcb6.appspot.com",
  messagingSenderId: "901895229149",
  appId: "1:901895229149:web:7185fb559bb16c8eaa1534",
  measurementId: "G-SJBQMXPNH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
