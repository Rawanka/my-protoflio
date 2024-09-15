// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwBXb6x038wnqJLwphvOJ-7hyN4uH6HFM",
  authDomain: "portfolio-5b6f7.firebaseapp.com",
  databaseURL: "https://portfolio-5b6f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-5b6f7",
  storageBucket: "portfolio-5b6f7.appspot.com",
  messagingSenderId: "331377484341",
  appId: "1:331377484341:web:4c597c679588bdc6b4877c",
  measurementId: "G-5K5E6D67E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);