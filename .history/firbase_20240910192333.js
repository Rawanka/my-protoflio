
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBucF149jVHeg3Y6l-dv9GNSfhGlZfWHnc",
  authDomain: "my-profile-bc79a.firebaseapp.com",
  projectId: "my-profile-bc79a",
  storageBucket: "my-profile-bc79a.appspot.com",
  messagingSenderId: "189121680466",
  appId: "1:189121680466:web:305f896ee912874d703b8b",
  measurementId: "G-K4PSPP4E5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);