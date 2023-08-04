// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxKX95uSZ0991gzzdh9y3U1oUXuW4-Ci8",
  authDomain: "news-aggregator-89e18.firebaseapp.com",
  projectId: "news-aggregator-89e18",
  storageBucket: "news-aggregator-89e18.appspot.com",
  messagingSenderId: "1086697520995",
  appId: "1:1086697520995:web:9c1ca8b42a8e023b7f9d56",
  measurementId: "G-KP8GTL9X8D",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
