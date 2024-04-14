import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.FIREBASE_API_KEY;
const AUTH_DOMAIN = import.meta.env.FIREBASE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.FIREBASE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.FIREBASE_APP_ID

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
