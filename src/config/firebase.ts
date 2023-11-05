// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOK8f00b_4iZtn03vSkI7j0r_037UaJxw",
  authDomain: "aligato-shop.firebaseapp.com",
  projectId: "aligato-shop",
  storageBucket: "aligato-shop.appspot.com",
  messagingSenderId: "246850830335",
  appId: "1:246850830335:web:b83190ae3fc95f36d6f1ca",
  measurementId: "G-0ZCG5SZ56T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
// const firestore = firebase.firestore();
// const analytics = getAnalytics(app);
