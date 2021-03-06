import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector'
import { DropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx'
import CartItem from '../cart-item/cart-item.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <DropdownContainer>
      <CartItems>
      {
        cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />
      )) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )
    }
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>Go to checkout</Button>

    </DropdownContainer>
  );
}

export default CartDropdown;
