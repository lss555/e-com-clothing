import { CartItemContainer, ItemDetails, Name, CartItemImg } from './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
  <CartItemContainer>
    <CartItemImg src={imageUrl} alt={`${name}`}/>
    <ItemDetails>
      <Name>{name}</Name>
      <span>{quantity} x ${price}</span>
    </ItemDetails>
  </CartItemContainer>
  )
}

export default CartItem;
