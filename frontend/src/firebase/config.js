// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqVwoVs601VCopfLKdw3iH8bqxJpYzWd4",
  authDomain: "tohien-shopo.firebaseapp.com",
  projectId: "tohien-shopo",
  storageBucket: "tohien-shopo.appspot.com",
  messagingSenderId: "500566523320",
  appId: "1:500566523320:web:0c125ac3664f555cb3234d",
  measurementId: "G-NJ9LXP19H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('analytics',analytics);