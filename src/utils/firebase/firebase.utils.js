import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup,
GoogleAuthProvider,
 } from 'firebase/auth';
 import {
   getFirestore,
   doc,
   getDoc,
   setDoc,
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Z-HHQhr77SaHRIOVy2ea9QGm6JL0EC8",
  authDomain: "e-com-clothing-db.firebaseapp.com",
  projectId: "e-com-clothing-db",
  storageBucket: "e-com-clothing-db.appspot.com",
  messagingSenderId: "261624546360",
  appId: "1:261624546360:web:a70b4b7a170b9787cb92cd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// needs new because GAP is a class with multiple diff uses
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log('doc ref', userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log('user snap shot', userSnapshot);
  // console.log(userSnapshot.exists())
};
