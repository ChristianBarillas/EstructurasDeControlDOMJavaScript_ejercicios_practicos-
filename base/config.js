// import firebase from "firebase/app";
// import "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBHPn3jDypgfdRgSKIfYbr4P1KG-HYvRjA",
    authDomain: "blog-data-a988b.firebaseapp.com",
    projectId: "blog-data-a988b",
    storageBucket: "blog-data-a988b.appspot.com",
    messagingSenderId: "893888958582",
    appId: "1:893888958582:web:c15ec26e426d70e47f0f57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();