// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0oFiK0ATk7JgpIw0XDv2kOlV6h2zND8s",
  authDomain: "mockly-82910.firebaseapp.com",
  projectId: "mockly-82910",
  storageBucket: "mockly-82910.firebasestorage.app",
  messagingSenderId: "681331397973",
  appId: "1:681331397973:web:04cd02cc8f7aec16880bdc",
  measurementId: "G-G04KZR3JFY"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app); 