import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import ProductFilter from '../components/ProductFilter';
import Pagination from '../components/Pagination';
import '../assets/Home.css';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState({});
  const [activeTab, setActiveTab] = useState('product-list');

  const handleAddProduct = (newProduct) => {
    // Add logic to add product
  };

  const handleUpdateProduct = (updatedProduct) => {
    // Add logic to update product
  };

  const handleDeleteProduct = (id) => {
    // Add logic to delete product
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleFilterProducts = (filterCriteria) => {
    setFilterCriteria(filterCriteria);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'product-list':
        return (
          <>
            <ProductFilter onFilter={handleFilterProducts} />
            <ProductList
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
              filterCriteria={filterCriteria}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={handlePageChange}
            />
          </>
        );
      case 'product-form':
        return (
          <ProductForm
            product={selectedProduct}
            onSave={selectedProduct ? handleUpdateProduct : handleAddProduct}
          />
        );
      case 'settings':
        return <div>Settings Component (Under Construction)</div>;
      case 'user-management':
        return <div>User Management Component (Under Construction)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <h1>Product Management Dashboard</h1>

      {/* Tab Navigation */}
      <div className="tabs">
        <button onClick={() => setActiveTab('product-list')}>Product List</button>
        <button onClick={() => setActiveTab('product-form')}>Product Form</button>
        <button onClick={() => setActiveTab('settings')}>Settings</button>
        <button onClick={() => setActiveTab('user-management')}>User Management</button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Home;
