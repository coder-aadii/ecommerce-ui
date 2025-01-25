// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from './ProductCard';
import '../assets/ProductList.css';

const ProductList = ({ onEdit, onDelete }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
