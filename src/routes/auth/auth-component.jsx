 import SignUpForm from '../../components/sign-up/sign-up-form.component.jsx';
 import { AuthContainer } from './auth.styles.jsx'

import SignInForm from '../../components/sign-in/sign-in-form.jsx';

const Auth = () => {


  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  )
};

export default Auth;
