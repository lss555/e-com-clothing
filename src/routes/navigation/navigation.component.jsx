import { Outlet } from 'react-router-dom';
import { Fragment } from 'react'
import { ReactComponent as Logo} from '../../assets/icons8-sun.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutUser } from '../../utils/firebase/firebase.utils.js'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo'/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>
              SIGN IN
              </NavLink>
            )}
            <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation
