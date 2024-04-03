// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
}

// Initialize Firebase app if it's not already initialized
const app = initializeApp(firebaseConfig);

// Check if Firebase Auth is already initialized
if (!getAuth(app)) {
    // Initialize Firebase Auth with AsyncStorage for persistence
    initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    });
}

// Get Firestore database instance
const database = getFirestore(app);

export { app, database }; // Export app if needed for other Firebase services
export const auth = getAuth(); // Export auth for authentication
