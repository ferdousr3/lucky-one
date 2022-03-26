import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // set all product
  const [products, setProducts] = useState([]);
  // set product to cart
  const [cart, setCart] = useState([]);
  // random item
   const [random, setRandom] = useState({});

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // add to cart product
  const handleAddToCart = (product) => {
    let cartItem = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        cartItem = true;
      }
    }

    if (cartItem === true) {
      alert("Cart Item Already exist");
    } else {
      const newCart = [...cart, product];
      if (newCart.length <= 4) {
        setCart(newCart);
      } else {
        alert(" You Can't Add More than 4  ");
      }
    }
  };

  // get random item
  const handleRandomItem = () => {
    const newCart = [...cart, random];
   const randomItem = newCart[Math.floor(Math.random() * newCart.length)];
    setRandom(randomItem);
  };
  // Remove all added product from cart
  const handleRemoveToCart = (product) => {
    setCart([]);
  };

  return (
    <div className="mt-5">
      <div className="container mt-5 mt-60">
        <div className="row">
          {/* product part */}
          <div className="col-12 col-sm-12 col-md-9">
            <div className="row">
              <div className="random-select"></div>
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
            <Cart
              cart={cart}
              handleRemoveToCart={handleRemoveToCart}
              handleRandomItem={handleRandomItem}
              randomData={random}
            ></Cart>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-8 mx-auto">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestiae quam aspernatur tempora at laudantium cum,
              necessitatibus odit tempore sapiente! Quaerat ut cumque neque enim
              accusantium eaque doloremque reprehenderit, libero illum ex non
              vel, ipsum rerum distinctio quo earum optio ullam alias molestiae
              iure error consequatur beatae vitae consequuntur. Obcaecati.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
