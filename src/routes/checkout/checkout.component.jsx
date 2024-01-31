import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
  const { cartItems, amount, removeItemFromCart, addItemToCart } =
    useContext(CartDropdownContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem
          key={item.id}
          cartItem={item}
          onRemoveClicked={() => removeItemFromCart(item, true)}
          incrementItem={() => addItemToCart(item)}
          decrementItem={() => removeItemFromCart(item)}
        />
      ))}
      <span className="total">Total: ${amount}</span>
    </div>
  );
};

export default CheckoutPage;
