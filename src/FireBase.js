import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// import {  } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDHZCSKSdGoYNnNyk51rD745c-CxKVAjZI",
  authDomain: "disney-13901.firebaseapp.com",
  databaseURL: "com.google.firebase:firebase-bom:32.7.2",
  projectId: "disney-13901",
  storageBucket: "disney-13901.appspot.com",
  messagingSenderId: "497421052453",
  appId: "1:497421052453:web:9f8bbb279f276339842dcc",
  measurementId: "G-MQPC6JZ73L",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
// export const database = getDatabase();
export default app;
