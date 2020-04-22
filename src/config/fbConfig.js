// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCXNgRlXvUxkeUmULi3nUOcXSKVNMPeW-w",
  authDomain: "prdx-project.firebaseapp.com",
  databaseURL: "https://prdx-project.firebaseio.com",
  projectId: "prdx-project",
  storageBucket: "prdx-project.appspot.com",
  messagingSenderId: "363311654817",
  appId: "1:363311654817:web:cc69846a8c3a97b846cde0",
  measurementId: "G-BFQ86NQR7Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;