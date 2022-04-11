// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWjOwcYGrKoRRvCVLrS3KYNzEDwbh-KNo",
  authDomain: "ginuas-car-services.firebaseapp.com",
  projectId: "ginuas-car-services",
  storageBucket: "ginuas-car-services.appspot.com",
  messagingSenderId: "974311082032",
  appId: "1:974311082032:web:812f084cdb795aa98f45f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;