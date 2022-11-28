import React, { useState } from "react";
import "./product.css";
import { addproducts } from '../Redux/Reducers/ProductSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    name_product: "",
    price: 1,
    description: "",
    image_url: "",
    discount_rate: 1,
  });
  const handleInputChange = (e) => {
    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (e) => {
    if (
      formInputs.name_product === "" ||
      formInputs.image_url === "" ||
      formInputs.description === ""
    ) {
      alert(" You did not complete  the form, kindly do so.");
    } else {
      clearForm();
      dispatch(addproducts(formInputs));
      navigate("/Products");
    }
  };
  const clearForm = () => {
    setFormInputs({
      name_product: "",
      price: 1,
      image_url: "",
      description: "",
      discount_rate: 1,
    });
  };

  return (
    <div className="conatiner">
    <div className="content">
      
      <h1> Add Product</h1>
      <hr />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name_product"
        value={formInputs.name_product}
        onChange={handleInputChange}
      />
    
      <label htmlFor="img">Image:</label>
      <input
        type="text"
        name="image_url"
        id="image_url"
        value={formInputs.image_url}
        onChange={handleInputChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        name="price"
        id="price"
        value={formInputs.price}
        onChange={handleInputChange}
      />
      <label htmlFor="discount_rate">Discount Rate:</label>
      <input
        type="number"
        name="discount_rate"
        id="discount_rate"
        value={formInputs.discount_rate}
        onChange={handleInputChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        rows="6"
        type="text"
        name="description"
        id="description"
        value={formInputs.description}
        onChange={handleInputChange}
      />
      <div className="btn">
      <input
        type="submit"
        onClick={() => {
          validate();
        }}
      />
      </div>
      
    </div>
    </div>
  );
}
