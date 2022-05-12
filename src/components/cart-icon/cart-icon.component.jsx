import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
    <ShoppingIcon className='shopping-icon'/>
    <ItemCount className='item-count'>{cartCount}</ItemCount>
  </CartIconContainer>
)
}

export default CartIcon;
