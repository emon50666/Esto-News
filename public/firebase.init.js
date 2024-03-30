// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVn4bzjmbxdukcV7kVqQIHn10VNPtm7wk",
  authDomain: "esto-news.firebaseapp.com",
  projectId: "esto-news",
  storageBucket: "esto-news.appspot.com",
  messagingSenderId: "391693007657",
  appId: "1:391693007657:web:185002257c0136d5399538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;