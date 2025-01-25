import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import TopNavbar from './components/TopNavbar'; // Top navigation component
import './assets/TopNavbar.css'
import './assets/Sidebar.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  return (
    <Router>
      <div className="app">
        {/* Top Navbar */}
        <TopNavbar />

        <div className="main-content">
          {/* Sidebar */}
          <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-logo">
              <h3>My Dashboard</h3>
            </div>

            <div className="hamburger" onClick={toggleSidebar}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>

            <ul className="sidebar-links">
              <li><Link to="/products">Product List</Link></li>
              <li><Link to="/product-form">Product Form</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/user-management">User Management</Link></li>
            </ul>
          </div>

          <div className="content-area">
            {/* Routing for the Dashboard */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductPage />} />
              {/* You can add more routes for other components like ProductForm, Settings, User Management */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
