import { Outlet } from 'react-router-dom';
import { Fragment } from 'react'
import { ReactComponent as Logo} from '../../assets/icons8-sun.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import { NavigationContainer, NavLinks, NavLink, LogoContainer, FooterContainer, FooterSocialMedia, FooterInfoLeft, FooterInfoRight, InternalLink, FooterInfo, FooterInfoCenter } from './navigation.styles.jsx';
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutStart } from '../../store/user/user.action'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
          <NavLink to='/about'>
            ABOUT
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
      <FooterContainer>
        <hr />
        <FooterInfo>
          <FooterInfoLeft>
            <FooterSocialMedia>
              <a href='https://www.linkedin.com/in/chrisheibel7/'>Linkedin</a>
            </FooterSocialMedia>
            <FooterSocialMedia>
              <a href='https://github.com/lss555'>GitHub</a>
            </FooterSocialMedia>
            <FooterSocialMedia>
            ChrisHeibeldev@gmail.com
            </FooterSocialMedia>
            <FooterSocialMedia>
            (720) 813-3248
            </FooterSocialMedia>
            <FooterSocialMedia>
            Denver, CO
            </FooterSocialMedia>
          </FooterInfoLeft>
          <FooterInfoCenter>
          </FooterInfoCenter>
          <FooterInfoRight>
            <InternalLink to='/'>
              HOME
            </InternalLink>
            <InternalLink to='/'>
              SHOP
            </InternalLink>
            <InternalLink to='/'>
              ABOUT
            </InternalLink>
            <InternalLink to='/'>
              SIGN IN
            </InternalLink>
          </FooterInfoRight>
        </FooterInfo>
      </FooterContainer>
    </Fragment>
  );
};

export default Navigation
