// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_QVEQGTjy_m7VZptYNCfJnaERAIRhaA0",
  authDomain: "carrervyaswebsite.firebaseapp.com",
  projectId: "carrervyaswebsite",
  storageBucket: "carrervyaswebsite.appspot.com",
  messagingSenderId: "286676001242",
  appId: "1:286676001242:web:b55558ef721686a789a0e3",
  measurementId: "G-LQBE9XG8EP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

