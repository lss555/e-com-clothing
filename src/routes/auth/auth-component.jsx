
import {
  signInWithGooglePopup, createUserDocumentFromAuth
 } from '../../utils/firebase/firebase.utils.js';
 import SignUpForm from '../../components/sign-up/sign-up-form.component.jsx';

import SignInForm from '../../components/sign-in/sign-in-form.jsx';

const Auth = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  )
};

export default Auth;
