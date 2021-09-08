// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC7q8WXsuchKk6KJtnGa_GnpG-5r68ATiI",
    authDomain: "hackathonprojectbymuzi.firebaseapp.com",
    projectId: "hackathonprojectbymuzi",
    storageBucket: "hackathonprojectbymuzi.appspot.com",
    messagingSenderId: "691862293031",
    appId: "1:691862293031:web:835c08f68f9f9cec181c02",
    measurementId: "G-MQCCBTKV9Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
//   export const storage = firebase.storage();
   export const auth = firebase.auth();