// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c7b4f.firebaseapp.com",
  projectId: "mern-blog-c7b4f",
  storageBucket: "mern-blog-c7b4f.appspot.com",
  messagingSenderId: "491828591687",
  appId: "1:491828591687:web:0d25c4b034db8451398562"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


