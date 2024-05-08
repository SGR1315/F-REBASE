// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5vhZ-zRKyb6yoijWHBSe2LtmmSAhgLeE",
  authDomain: "bolgeler-c720a.firebaseapp.com",
  databaseURL: "https://bolgeler-c720a-default-rtdb.firebaseio.com",
  projectId: "bolgeler-c720a",
  storageBucket: "bolgeler-c720a.appspot.com",
  messagingSenderId: "1060512122848",
  appId: "1:1060512122848:web:605a36c542eb10fda18d85",
  measurementId: "G-08M3T36F66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
