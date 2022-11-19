import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuCEZD-lRG3IJHSCi7nPUlp1EA_F3dv90",
    authDomain: "stem-c072c.firebaseapp.com",
    projectId: "stem-c072c",
    storageBucket: "stem-c072c.appspot.com",
    messagingSenderId: "598766633808",
    appId: "1:598766633808:web:ccb3b3bbddcf5f44282255",
    measurementId: "G-XF23ZNNRN6"
  };

// Use this to initialize the firebase App
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth(app)
