// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGF0u9Z-KGw78yqwYsTCrWk2imicOUci4",
  authDomain: "extension-app-d6023.firebaseapp.com",
  projectId: "extension-app-d6023",
  storageBucket: "extension-app-d6023.appspot.com",
  messagingSenderId: "753918792996",
  appId: "1:753918792996:web:9de98757032e9edb494fb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;