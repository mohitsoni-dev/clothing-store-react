import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  isCartDropdownHidden: true,
  toggleCartDropdown: () => {},
  cartItems: {},
  addItemToCart: () => {},
  totalItemsInCart: 0,
  amount: 0.00,
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartDropdownHidden, toggleCartDropdown] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [amount, setAmount] = useState(0.00);

  const addItemToCart = (item) => {
    setTotalItemsInCart(totalItemsInCart + 1);
    setAmount(amount + item.price);
    const key = item.id;
    if (cartItems[key]) {
      cartItems[key].quantity += 1;
    } else {
      cartItems[key] = item;
      cartItems[key].quantity = 1;
    }
    setCartItems(cartItems);
  };

  const removeItemFromCart = (item, removeAll = false) => {
    if (totalItemsInCart === 0) return;
    if (removeAll) {
      setTotalItemsInCart(totalItemsInCart - cartItems[item.id].quantity);
      setAmount(amount - (cartItems[item.id].quantity * item.price));
      delete cartItems[item.id];
      setCartItems(cartItems);
      return;
    }
    setTotalItemsInCart(totalItemsInCart - 1);
    setAmount(amount - item.price);
    const key = item.id;
    if (cartItems[key].quantity === 1) {
      delete cartItems[key];
    } else {
      cartItems[key].quantity -= 1;
    }
    setCartItems(cartItems);
  }

  const value = {
    isCartDropdownHidden,
    toggleCartDropdown,
    cartItems,
    addItemToCart,
    totalItemsInCart,
    removeItemFromCart,
    amount,
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
