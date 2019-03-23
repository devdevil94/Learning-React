import React from "react";

function Product(props) {
  const productStyle = {
    marginBottom: "10px",
    borderBottom: "2px solid #000",
    width: "200px"
  };
  return (
    <div style={productStyle}>
      <p>{"ID: " + props.product.id}</p>
      <p>{"Name: " + props.product.name}</p>
      <p>
        {"Price: " +
          props.product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
      </p>
      <p>{"Description: " + props.product.description}</p>
    </div>
  );
}

export default Product;
