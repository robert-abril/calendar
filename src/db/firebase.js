import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2QFvvMFYj8XoyHPqH6Kw5c0cLNMdOBRc",
  authDomain: "calendar-2e72a.firebaseapp.com",
  projectId: "calendar-2e72a",
  storageBucket: "calendar-2e72a.appspot.com",
  messagingSenderId: "689938593340",
  appId: "1:689938593340:web:72f648d58563523689f539",
};

// init firebase app
initializeApp(firebaseConfig);

//init services
export const db = getFirestore();

//collection ref
export const colRef = collection(db, "Event");

// get collection data
getDocs(colRef).then((snapshot) => {});

export default db;
