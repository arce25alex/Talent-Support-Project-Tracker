// Import Firebase functions needed for authentication
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv4eBCSNOvvu_UJPEFjfQa-giz4ImasoM",
  authDomain: "talent-support-project-tracker.firebaseapp.com",
  projectId: "talent-support-project-tracker",
  storageBucket: "talent-support-project-tracker.appspot.com", 
  messagingSenderId: "602478734856",
  appId: "1:602478734856:web:5fce6e6d08076472a0abbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
