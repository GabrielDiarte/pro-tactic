// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEtihCuJsjBKLbIye3H8UcavT8F4KRLHE",
  authDomain: "pro-tactic.firebaseapp.com",
  projectId: "pro-tactic",
  storageBucket: "pro-tactic.appspot.com",
  messagingSenderId: "598141223380",
  appId: "1:598141223380:web:8af3822755edde28a31641",
  measurementId: "G-M25SX3KWB1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics(app);