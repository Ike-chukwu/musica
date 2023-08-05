// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUaAs6KB0kLOrvEILQHDMEKxE71-WadxI",
  authDomain: "musica-auth.firebaseapp.com",
  projectId: "musica-auth",
  storageBucket: "musica-auth.appspot.com",
  messagingSenderId: "757193554094",
  appId: "1:757193554094:web:48f3dbe02bae319478553f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;