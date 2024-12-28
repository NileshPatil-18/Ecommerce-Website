// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgQDQoOmqzrOgU9d__0dyyLO3XoO8NY6Q",
    authDomain: "e-commerce-app-6cdc2.firebaseapp.com",
    projectId: "e-commerce-app-6cdc2",
    storageBucket: "e-commerce-app-6cdc2.firebasestorage.app",
    messagingSenderId: "759341780726",
    appId: "1:759341780726:web:d770281f8d2eb9c8d366d7",
    measurementId: "G-MB6SVB3XKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
