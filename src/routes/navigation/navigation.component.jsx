import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react'
import { ReactComponent as Logo} from '../../assets/icons8-sun.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import './navigations.styles.scss';
import { UserContext } from '../../contexts/user.context.jsx';
import { CartContext } from '../../contexts/cart.context.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className ='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) : (<Link className='nav-link' to='/auth'>
              SIGN IN
              </Link>
            )}
            <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation
