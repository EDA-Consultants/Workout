// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGXrJE5wxVFwUNrnFe76xhsyAwgJeLYnM",
  authDomain: "workoutapp-3128a.firebaseapp.com",
  projectId: "workoutapp-3128a",
  storageBucket: "workoutapp-3128a.appspot.com",
  messagingSenderId: "188778727251",
  appId: "1:188778727251:web:7f60c2f6587dd5a5e583a6",
  measurementId: "G-EWL4X5TNY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);