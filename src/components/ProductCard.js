// src/components/ProductCard.js
import React from 'react';
import '../assets/ProductCard.css';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* Display the product image */}
        {product.imageUrl && (
          <img src={product.imageUrl} alt={product.name} className="product-image" />
        )}
      </div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  );
};

export default ProductCard;
