import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBR_KyWKU8NSHKd_kReobfVg2v0iMCM0gg",
    authDomain: "facebook--2-yt.firebaseapp.com",
    projectId: "facebook--2-yt",
    storageBucket: "facebook--2-yt.appspot.com",
    messagingSenderId: "103438027174",
    appId: "1:103438027174:web:e40e350a7659a9c408a767"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage};