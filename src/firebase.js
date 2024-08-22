// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {  apiKey: "AIzaSyBEI9EJ8F4CuvcGSMPu8GAmtVcZVhBCbmQ",
    authDomain: "rscbot-3cf09.firebaseapp.com",  projectId: "rscbot-3cf09",
    storageBucket: "rscbot-3cf09.appspot.com",  messagingSenderId: "638919619704",
    appId: "1:638919619704:web:fa9611b74c31d18691a98d",  measurementId: "G-6MF3F3M614"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized:", app);
console.log("Firestore initialized:", db);

export { db };
