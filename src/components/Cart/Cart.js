import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { TrashIcon } from "@heroicons/react/solid";
import './Cart.css'

const Cart = (props) => {
  const {cart} = props
  
  console.log(props)
  return (
    <div className="card border">
      <Card.Body>
        <Card.Title>Add Your Product</Card.Title>
        <p>cart:{cart.length}</p>
        <div>
          {cart.map((cartData) => (
            <div className="cart" key={cartData.id}>
              <img
                src={cartData.img}
                alt={cartData.name}
              />
              <p className='cart-product-name'>{cartData.name}</p>
              <button className="cart-btn">
                <TrashIcon className="cart-btn-icons" />
              </button>
            </div>
          ))}
        </div>
        <Button variant="primary">Choose 1 for Me</Button>

        <Button className="mt-2" variant="success">
          Choose Again
        </Button>
      </Card.Body>
    </div>
  );
};

export default Cart;