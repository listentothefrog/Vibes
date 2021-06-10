import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuOeJAB89wZXrjtmpX1Hha42EfslDss_w",
  authDomain: "coolvibesgg.firebaseapp.com",
  projectId: "coolvibesgg",
  storageBucket: "coolvibesgg.appspot.com",
  messagingSenderId: "772702090679",
  appId: "1:772702090679:web:63a0a5c6288c422a0d6432",
  measurementId: "G-41DTZRZNSN",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
