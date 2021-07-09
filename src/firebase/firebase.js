import firebase from 'firebase/app';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBUrSAEFdMX-0Hcc9EXiM3bpWW4K2Sgb9k",
    authDomain: "bike-clothing.firebaseapp.com",
    projectId: "bike-clothing",
    storageBucket: "bike-clothing.appspot.com",
    messagingSenderId: "831686727591",
    appId: "1:831686727591:web:83983441a4615eb76a8882",
    measurementId: "G-0Q6BZL47K6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const fb = firebaseConfig