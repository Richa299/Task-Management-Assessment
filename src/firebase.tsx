import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjtB8ECkGTAnOwbquBvGijTPiauxamwm0",
  authDomain: "taskbuddy-12a03.firebaseapp.com",
  projectId: "taskbuddy-12a03",
  storageBucket: "taskbuddy-12a03.firebasestorage.app",
  messagingSenderId: "972546617671",
  appId: "1:972546617671:web:e904a6e1bd662906c85c62",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, db };
