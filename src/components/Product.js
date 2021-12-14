import React from "react";

const Product = ({ product }) => {

	return (
    <div className="d-flex mb-2">
      <div
        className={
          product.level === 0
            ? "bg-danger"
            : product.level === 1
            ? "bg-warning"
            : "bg-muted"
        }
        style={{ width: "5px" }}
      ></div>
      <div className="px-2">
        <p className="m-0">{product.name}</p>
        <p className="m-0 text-muted text-9rem">{product.date}</p>
      </div>
    </div>
  );
};

export default Product;