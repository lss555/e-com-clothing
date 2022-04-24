import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component.jsx'
import Auth from './routes/auth/auth-component.jsx'
import SignInForm from './components/sign-in/sign-in-form.jsx'

const Shop = () => {
  return <h1>I'm the shop page</h1>
};

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="auth" element={<Auth />}/>
      <Route path="sign-in-email" element={<SignInForm />}/>
    </Route>
    </Routes>
  );
}

export default App;
