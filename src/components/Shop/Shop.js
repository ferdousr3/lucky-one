import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // set all product
  const [products, setProducts] = useState([]);
  // set product to cart
  const [cart, setCart] = useState([]);
  // remove product from cart
  const [remove, setRemove] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // add to cart product
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    if (newCart.length <= 4 ) {
      setCart(newCart);
    } else {
      alert(" You Can't Add More than 4  ");
    }

    // console.log("new cart", newCart);
  };

  // Remove all added product from cart

  // const handleRemoveToCart=()=>{
  //   const removeCart
  // }

  return (
    <div className="mt-5">
      <div className="container mt-5 mt-60">
        <div className="row">
          {/* product part */}
          <div className="col-12 col-sm-12 col-md-9">
            <div className="row">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="col-12 col-sm-12 col-md-6 col-lg-4  mb-4"
                >
                  <Product
                    product={product}
                    handleAddToCart={handleAddToCart}
                  ></Product>
                </div>
              ))}
            </div>
          </div>
          {/* cart part */}
          <div className="col-12 col-sm-12 col-md-3">
            <p>product: {cart.length}</p>
            <Cart cart={cart}></Cart>

            {/* <Button variant="primary">Choose 1 for Me</Button>

            <Button className="mt-2" variant="success">
              Choose Again
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
