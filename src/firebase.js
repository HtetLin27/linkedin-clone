
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBl2HZD_4HXPelzniLqxmmwCePWamPcKIs",
    authDomain: "linkedin-clone-1093f.firebaseapp.com",
    projectId: "linkedin-clone-1093f",
    storageBucket: "linkedin-clone-1093f.appspot.com",
    messagingSenderId: "286685879356",
    appId: "1:286685879356:web:2e1a4eeabba4ea17bd3739"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();



export { db ,auth} ;