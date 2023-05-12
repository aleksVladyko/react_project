import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_DESSERTS_API_KEY,
  authDomain: process.env.REACT_APP_DESSERTS_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DESSERTS_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DESSERTS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DESSERTS_MESSAGING_SENDER_ID,
  appId: process.env.EACT_APP_DESSERTS_APP_ID
};


const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}