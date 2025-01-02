// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "add your api key",
    authDomain: "e-commerce-app-6cdc2.firebaseapp.com",
    projectId: "e-commerce-app-6cdc2",
    storageBucket: "e-commerce-app-6cdc2.firebasestorage.app",
    messagingSenderId: "759341780726",
    appId: "add yur api id",
    measurementId: "G-MB6SVB3XKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
