 import SignUpForm from '../../components/sign-up/sign-up-form.component.jsx';
 import './auth.styles.scss'

import SignInForm from '../../components/sign-in/sign-in-form.jsx';

const Auth = () => {


  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
};

export default Auth;
