// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDbuLN5Nuu8wU5kuS5vSK78-sBby-3ImM",
  authDomain: "my-business-8babc.firebaseapp.com",
  projectId: "my-business-8babc",
  storageBucket: "my-business-8babc.appspot.com",
  messagingSenderId: "653596084018",
  appId: "1:653596084018:web:2d37f86c684bf4f955f92b",
  measurementId: "G-5H6RFLK3HF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);