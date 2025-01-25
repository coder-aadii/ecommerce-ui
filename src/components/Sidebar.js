import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import Settings from '../components/Settings';
import UserManagement from '../components/UserManagement';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <TopNavbar />

        <div className="main-content">
          <Sidebar />

          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product-form" element={<ProductForm />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/user-management" element={<UserManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
