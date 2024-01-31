import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ onClick }) => {
  const { totalItemsInCart } = useContext(CartDropdownContext);
  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <ItemCount>{totalItemsInCart}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
