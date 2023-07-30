// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH5ar6JZ2Gs9XKP1k7-zLXOP-OXfM1T44",
  authDomain: "betocomerce-28238.firebaseapp.com",
  projectId: "betocomerce-28238",
  storageBucket: "betocomerce-28238.appspot.com",
  messagingSenderId: "40534376085",
  appId: "1:40534376085:web:e41aae7a680fe454c2e59c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
