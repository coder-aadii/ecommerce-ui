import React from 'react';
import '../assets/TopNavbar.css'; // Style the navbar here

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="navbar-left">
        <h2>E-Commerce - Product Management</h2>
      </div>
      <div className="navbar-right">
        <div className="profile">
          <span>Welcome, User</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
