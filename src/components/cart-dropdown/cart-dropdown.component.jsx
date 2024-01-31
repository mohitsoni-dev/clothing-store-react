import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {Object.keys(cartItems).length === 0 ? (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        ) : (
          Object.keys(cartItems).map((key) => (
            <CartItem key={key} item={cartItems[key]} />
          ))
        )}
      </CartItems>
      <Button onClick={navigateToCheckout}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
