import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzrgUE_L8HUNi6UEBRI44EQ1z2syEv-jg",
  authDomain: "cool-vibes-gg.firebaseapp.com",
  projectId: "cool-vibes-gg",
  storageBucket: "cool-vibes-gg.appspot.com",
  messagingSenderId: "821618941582",
  appId: "1:821618941582:web:8ebb513ff5bc8687d733df",
  measurementId: "G-H3JV6DDG15",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
