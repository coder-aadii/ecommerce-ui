import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import Pagination from '../components/Pagination';
import { addProduct, updateProduct, deleteProduct } from '../utils/api';
import '../assets/ProductPage.css'

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState({});
  
  // Handle adding a new product
  const handleAddProduct = async (newProduct) => {
    await addProduct(newProduct);
    setSelectedProduct(null); // Reset selected product after adding
  };

  // Handle updating an existing product
  const handleUpdateProduct = async (updatedProduct) => {
    await updateProduct(selectedProduct._id, updatedProduct);
    setSelectedProduct(null); // Reset selected product after updating
  };

  // Handle deleting a product
  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
  };

  // Handle editing a product
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  // Handle filter change for products
  const handleFilterProducts = (filterCriteria) => {
    setFilterCriteria(filterCriteria);
  };

  // Handle page change for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-page">
      <h1>Product Management</h1>

      {/* Product Form */}
      <ProductForm
        product={selectedProduct}
        onSave={selectedProduct ? handleUpdateProduct : handleAddProduct}
      />

      {/* Product Filter */}
      <ProductFilter onFilter={handleFilterProducts} />

      {/* Product List */}
      <ProductList
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        filterCriteria={filterCriteria}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={10} // Dynamically calculate total pages based on number of products
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductPage;
