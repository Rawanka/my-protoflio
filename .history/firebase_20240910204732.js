import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwBXb6x038wnqJLwphvOJ-7hyN4uH6HFM",
  authDomain: "portfolio-5b6f7.firebaseapp.com",
  projectId: "portfolio-5b6f7",
  storageBucket: "portfolio-5b6f7.appspot.com",
  messagingSenderId: "331377484341",
  appId: "1:331377484341:web:4cb07c6d9dfdcd8cb4877c",
  measurementId: "G-VCNMCLK8YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
      // Your analytics code here
    }
  });
}

