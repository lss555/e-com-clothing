import { Outlet } from 'react-router-dom';
import { Fragment } from 'react'
import { ReactComponent as Logo} from '../../assets/icons8-sun.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import { NavigationContainer, NavLinks, NavLink, LogoContainer, FooterContainer, FooterSocialMedia, FooterInfoLeft, FooterInfoRight, InternalLink, FooterInfo, FooterInfoCenter, SocialMediaLink } from './navigation.styles.jsx';
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
              <SocialMediaLink href='https://www.instagram.com'>Instagram</SocialMediaLink>
            </FooterSocialMedia>
            <FooterSocialMedia>
            contact@sunnyside.com
            </FooterSocialMedia>
            <FooterSocialMedia>
            (720) 813-7964
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
            <InternalLink to='/shop'>
              SHOP
            </InternalLink>
            <InternalLink to='/about'>
              ABOUT
            </InternalLink>
            <InternalLink to='/auth'>
              SIGN IN
            </InternalLink>
          </FooterInfoRight>
        </FooterInfo>
      </FooterContainer>
    </Fragment>
  );
};

export default Navigation
