import React from "react";
import { Link } from "react-router-dom";

function ProductDetail({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-inner">
        <h1 className="text-2xl font-medium">{product.category}</h1>
        <img src={product.image} alt={product.title} width={200} />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">Price: ${product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductDetail;
