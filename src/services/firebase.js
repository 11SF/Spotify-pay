import firebase from "firebase";
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgTaBZ3fE2K6MuK4EbFsAt6f4XXhbMkmo",
    authDomain: "spotify-pay.firebaseapp.com",
    databaseURL: "https://spotify-pay-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spotify-pay",
    storageBucket: "spotify-pay.appspot.com",
    messagingSenderId: "257070950029",
    appId: "1:257070950029:web:8c7b325dbe3bc5638524c4",
    measurementId: "G-CC3MMHTK7P"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();

//   provider.setCustomParameters({ prompt: "select_account" });

//   export const signInWithGoogle = (auth.signInWithPopup(provider));

  export default firebase;