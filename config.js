import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl0lBTxG_m7iUl_7bB_RvyFFLoIJA6-qo",
  authDomain: "santa-73e92.firebaseapp.com",
  projectId: "santa-73e92",
  storageBucket: "santa-73e92.appspot.com",
  messagingSenderId: "771989085716",
  appId: "1:771989085716:web:a71d697173a14a39991101",
  measurementId: "G-4C6RSVJC8S"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
