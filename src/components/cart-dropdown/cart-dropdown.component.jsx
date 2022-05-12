import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context'
import { DropdownContainer, CartItems,  } from './cart-dropdown.styles.jsx'
import CartItem from '../cart-item/cart-item.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <DropdownContainer>
      <CartItems>
      {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>Go to checkout</Button>

    </DropdownContainer>
  )
}

export default CartDropdown;
