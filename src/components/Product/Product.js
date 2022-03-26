
import { ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import './Product.css'

const Product = (props) => {
  // console.log(props);
  const{handleAddToCart, product} = props
  const {id, name, img, price } = product;
  return (
    <div className="p-2  card product">
      <img src={img} alt={name} />
      <div className="pt-4 pb-5">
        <h6>Name: {name}</h6>
        <h6>Price: ${price}</h6>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
        Add To Cart <ShoppingCartIcon className="cart-btn-icon" />
      </button>
    </div>
  );
};

export default Product;
