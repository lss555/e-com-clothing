import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component.jsx'
import Footer from './routes/footer/footer.component.jsx'
import Auth from './routes/auth/auth-component.jsx';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component.jsx'
import About from './routes/about/about.jsx'

import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop/*" element={<Shop />}/>
        <Route path="auth" element={<Auth />}/>
        <Route path="checkout" element={<Checkout />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
  );
}

export default App;
