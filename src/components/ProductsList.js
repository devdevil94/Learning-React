import React from "react";
import Product from "./Product";
import products from "../products";

function ProductsList(props) {
  return (
    <div>
      <h3>List of products:</h3>
      {products.map(createProductComponent)}
    </div>
  );
}

function createProductComponent(product) {
  return <Product product={product} />;
}

export default ProductsList;
