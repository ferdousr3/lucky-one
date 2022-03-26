import React from "react";
import { Card, Button } from "react-bootstrap";
import { TrashIcon } from "@heroicons/react/solid";
import "./Cart.css";

const Cart = ( props) => {
  const {
    id,
    cart,
    handleRemoveToCart,
    handleRandomItem,
    randomData,
  } = props;
  return (
    <div className="card border my-card-image">
      <Card.Body>
        {/* random items */}
        <div className="random-item">
          <img src={randomData.img} alt={randomData.name} />
          <p className="cart-product-name">{randomData.name}</p>
        </div>
        {/* normal selected items */}
        <Card.Title>Add Your Burger</Card.Title>
        <div>
          {cart.map((cartData) => (
            <div className="cart" key={cartData.id}>
              <img src={cartData.img} alt={cartData.name} />
              <p className="cart-product-name">{cartData.name}</p>
              <button className="cart-btn">
                <TrashIcon className="cart-btn-icons" />
              </button>
            </div>
          ))}
        </div>
        <Button onClick={() => handleRandomItem()} variant="primary">
          Choose 1 for Me
        </Button>

        <Button
          onClick={() => handleRemoveToCart(id)}
          className="mt-2"
          variant="success"
        >
          Choose Again
        </Button>
      </Card.Body>
    </div>
  );
};

export default Cart;
