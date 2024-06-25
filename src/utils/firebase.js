import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDnn_pE946Ko7u_O_scgwmkKPPICIrHDhI",
  authDomain: "netflixgpt-aaf20.firebaseapp.com",
  projectId: "netflixgpt-aaf20",
  storageBucket: "netflixgpt-aaf20.appspot.com",
  messagingSenderId: "1098300066095",
  appId: "1:1098300066095:web:06223fcc54912cac38f9da",
  measurementId: "G-CQYG8HN4YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();