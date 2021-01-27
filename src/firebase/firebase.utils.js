import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwMKGaFRmb5gj5gwkthhlUpTwD4jnPCT8",
  authDomain: "crwn-db-210c3.firebaseapp.com",
  projectId: "crwn-db-210c3",
  storageBucket: "crwn-db-210c3.appspot.com",
  messagingSenderId: "310443947722",
  appId: "1:310443947722:web:18b47ff5cb8b2bce4e6633",
  measurementId: "G-RVF9VJ30RM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;