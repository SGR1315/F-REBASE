// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdKiU4LbWOSJPyPHm9iFdM4LXZjmCkL-0",
  authDomain: "jsbolgedeneme-5a05c.firebaseapp.com",
  projectId: "jsbolgedeneme-5a05c",
  storageBucket: "jsbolgedeneme-5a05c.appspot.com",
  messagingSenderId: "641904683110",
  appId: "1:641904683110:web:1a6e173a96f816b3aa25a7",
  measurementId: "G-4R4FT3D2V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);