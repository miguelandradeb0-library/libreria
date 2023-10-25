import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCwjMwQwmLqQNUxQ8F0SPd1dI5IIodqNg",
  authDomain: "libreria-5a4b3.firebaseapp.com",
  projectId: "libreria-5a4b3",
  storageBucket: "libreria-5a4b3.appspot.com",
  messagingSenderId: "619268535669",
  appId: "1:619268535669:web:6b7e0f92c8639326658f3c"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);