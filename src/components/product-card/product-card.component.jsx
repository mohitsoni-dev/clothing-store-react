import "./product-card.styles.scss";
import { Button } from "../button/button.component";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import React, { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartDropdownContext);
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={() => addItemToCart(product)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
