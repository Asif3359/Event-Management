// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuAtQ8Q04VaQf1O8BLS_vQmkiyDY9-Ork",
    authDomain: "event-managemente.firebaseapp.com",
    projectId: "event-managemente",
    storageBucket: "event-managemente.appspot.com",
    messagingSenderId: "73508535641",
    appId: "1:73508535641:web:8238543b83d63cebcbe048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
