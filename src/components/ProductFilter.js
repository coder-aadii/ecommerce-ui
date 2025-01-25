// src/components/ProductFilter.js
import React, { useState } from 'react';
import '../assets/ProductFilter.css'

const ProductFilter = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    const filterCriteria = { category, minPrice, maxPrice };
    onFilter(filterCriteria);
  };

  return (
    <div className="product-filter">
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default ProductFilter;
