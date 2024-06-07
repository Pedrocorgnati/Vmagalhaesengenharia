// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyTc5TUS5k94j0uVNmdhbRjCDJUs0I_hw",
  authDomain: "vmagalhaes-engenharia.firebaseapp.com",
  projectId: "vmagalhaes-engenharia",
  storageBucket: "vmagalhaes-engenharia.appspot.com",
  messagingSenderId: "227618291518",
  appId: "1:227618291518:web:9fcdb036563b9350d3366f",
  measurementId: "G-6YKG92BBH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);