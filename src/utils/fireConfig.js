// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTbXNOFXd0YSr_wVym1UimzqV3TilZqrQ",
  authDomain: "makeup-app-9fce8.firebaseapp.com",
  projectId: "makeup-app-9fce8",
  storageBucket: "makeup-app-9fce8.appspot.com",
  messagingSenderId: "1070483328553",
  appId: "1:1070483328553:web:0ae8b4adfc09fb0ee15638",
  measurementId: "G-XZT83LBH8S",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
