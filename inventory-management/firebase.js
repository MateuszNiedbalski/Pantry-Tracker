import { initializeApp } from 'firebase/app'; 
import { getFirestore } from 'firebase/firestore'; // Corrected function name

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq6qtNAwrTQWfjCVtO1iw8tw8MtlyRWXs",
  authDomain: "inventory-management-edcba.firebaseapp.com",
  projectId: "inventory-management-edcba",
  storageBucket: "inventory-management-edcba.appspot.com",
  messagingSenderId: "853622735656",
  appId: "1:853622735656:web:e170af3235ee7c6414861d",
  measurementId: "G-61XQ32TWE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const firestore = getFirestore(app); // Corrected function name

export { firestore };
