// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAE6TvgYMSvBJUlaqW0mExEDc_Y7D6SoSU",
  authDomain: "netflix-gpt-aff53.firebaseapp.com",
  projectId: "netflix-gpt-aff53",
  storageBucket: "netflix-gpt-aff53.appspot.com",
  messagingSenderId: "364069769624",
  appId: "1:364069769624:web:f9e0c13abccf8381b89bed",
  measurementId: "G-T0DPB1GC2Q",
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth();
const data=doc(db,'OPENAI','MNTWy1f9rxVVcLPGiWMY')

export const key=await getDoc(data)




