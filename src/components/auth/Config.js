import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBm0s8BMPKmpDTasQoBQkF3i6rRv15ttTQ",
  authDomain: "simplepromanager.firebaseapp.com",
  projectId: "simplepromanager",
  storageBucket: "simplepromanager.appspot.com",
  messagingSenderId: "122857891190",
  appId: "1:122857891190:web:3a2f0b262980d330cec657",
};

const fire = firebase.initializeApp(firebaseConfig);

const db = fire.firestore();

const tStamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, fire, tStamp };
