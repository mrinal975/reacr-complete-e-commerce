import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAyZVCD5i-VqdUK3hzQEjj0FGlnaj2EtD4",
  authDomain: "react-commerce-2b9ef.firebaseapp.com",
  projectId: "react-commerce-2b9ef",
  storageBucket: "react-commerce-2b9ef.appspot.com",
  messagingSenderId: "333371195805",
  appId: "1:333371195805:web:af7c1d4222a99bbc192f74",
  measurementId: "G-M89B558HB1",
};
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
