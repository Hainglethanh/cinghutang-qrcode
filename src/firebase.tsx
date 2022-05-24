import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCp3crwaKuN-3VCZXSRduT8Bl-4z-yoxAQ",
  authDomain: "cing-hu-tang.firebaseapp.com",
  projectId: "cing-hu-tang",
  storageBucket: "cing-hu-tang.appspot.com",
  messagingSenderId: "762081897396",
  appId: "1:762081897396:web:1364d878dcc8da8758a0e1",
  measurementId: "G-KMR3ZDEZLD",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const customerRef = collection(db, "customers");
