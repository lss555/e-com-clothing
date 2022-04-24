import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log('doc ref', userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log('user snap shot', userSnapshot);
  // console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword =  async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
