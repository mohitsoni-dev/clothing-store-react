import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  onRemoveClicked,
  incrementItem,
  decrementItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem}> &#10094; </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementItem}> &#10095; </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={onRemoveClicked} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
