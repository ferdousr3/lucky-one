import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Product from "../Product/Product";
import './Shop.css'


const Shop = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('product.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return (
    <div className="mt-5">
      <div className="container mt-5 mt-60">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-9">
            <div className="row">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="col-12 col-sm-12 col-md-6 col-lg-4  mb-4"
                >
                  <Product product={product}></Product>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3">
            <div className="card border">
              <Card.Body>
                <Card.Title>Add Your Product</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Choose 1 for Me</Button>
                
                <Button className="mt-2" variant="success">Choose Again</Button>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
