// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHZCSKSdGoYNnNyk51rD745c-CxKVAjZI",
  authDomain: "disney-13901.firebaseapp.com",
  projectId: "disney-13901",
  storageBucket: "disney-13901.appspot.com",
  messagingSenderId: "497421052453",
  appId: "1:497421052453:web:9f8bbb279f276339842dcc",
  measurementId: "G-MQPC6JZ73L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export default app;