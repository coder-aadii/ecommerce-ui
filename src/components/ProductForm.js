// src/components/ProductForm.js
import React, { useState } from 'react';
import '../assets/ProductForm.css';

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    productDescription: '',
    productCategory: '',
    availableQuantity: '',
    productWeight: '',
    productDescriptionFr: '',
    percentageDiscount: '',
    stockAlert: '',
    stockCritical: '',
    tutorial: '',
    tutorialFr: '',
    onlineDate: '',
    author: '',
    enableDisplay: '',
    comment: '',
    approvedBy: '',
    mainImage: null,
    auxiliaryImages: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the passed in onSubmit function to handle the submission
  };

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <fieldset>
        <legend>PRODUCTS</legend>

        {/* Product ID */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="productId">
            PRODUCT ID
          </label>
          <div className="col-md-4">
            <input
              id="productId"
              name="productId"
              placeholder="PRODUCT ID"
              className="form-control input-md"
              required
              type="text"
              value={formData.productId}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Product Name */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="productName">
            PRODUCT NAME
          </label>
          <div className="col-md-4">
            <input
              id="productName"
              name="productName"
              placeholder="PRODUCT NAME"
              className="form-control input-md"
              required
              type="text"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Product Description */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="productDescription">
            PRODUCT DESCRIPTION
          </label>
          <div className="col-md-4">
            <textarea
              className="form-control"
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Product Category */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="productCategory">
            PRODUCT CATEGORY
          </label>
          <div className="col-md-4">
            <select
              id="productCategory"
              name="productCategory"
              className="form-control"
              value={formData.productCategory}
              onChange={handleChange}
            >
              {/* Populate categories dynamically */}
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
          </div>
        </div>

        {/* Quantity, Weight, and Other Fields */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="availableQuantity">
            AVAILABLE QUANTITY
          </label>
          <div className="col-md-4">
            <input
              id="availableQuantity"
              name="availableQuantity"
              placeholder="AVAILABLE QUANTITY"
              className="form-control input-md"
              required
              type="text"
              value={formData.availableQuantity}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* File Upload for Images */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="mainImage">
            Main Image
          </label>
          <div className="col-md-4">
            <input
              id="mainImage"
              name="mainImage"
              className="input-file"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <div className="col-md-4 col-md-offset-4">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ProductForm;
