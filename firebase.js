/** @format */
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-iQu_JN3CHx16224DIETxBWtEqalOX8Q",
  authDomain: "docs-d8432.firebaseapp.com",
  projectId: "docs-d8432",
  storageBucket: "docs-d8432.appspot.com",
  messagingSenderId: "466845371565",
  appId: "1:466845371565:web:ff6e242c3dde1234328a24",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
