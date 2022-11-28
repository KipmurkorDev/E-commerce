import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addusers } from "../Redux/Reducers/userSlice";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signUpInput, setSignup] = useState({
    email: "",
    user_password: "",
  });
  const handleInputChange = (e) => {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const validate = (e) => {
    if (signUpInput.user_name=== ""||signUpInput.email === "" || signUpInput.user_password === "") {
      clearForm();
      alert(" You did not complete  the form, kindly do so.");
    } else {
      dispatch(addusers(signUpInput));
      clearForm();
      navigate("/");
    }
  };
  const clearForm = () => {
    setSignup({
      user_name: "",
      email: "",
      user_password: "",
    });
  };

  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Please Signup</div>
      <div className="input-container ic1">
        <input
          id="user"
          className="input"
          type="text"
          name="user_name"
          value={signUpInput.user_name}
          onChange={handleInputChange}
        />
        <div className="cut"></div>
        <label htmlFor="user" className="placeholder">
          Name
        </label>
      </div>
      <div className="input-container ic1">
        <input
          id="email"
          className="input"
          type="email"
          name="email"
          value={signUpInput.email}
          onChange={handleInputChange}
        />
        <div className="cut"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="password"
          className="input"
          type="password"
          name="user_password"
          value={signUpInput.user_password}
          onChange={handleInputChange}
        />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">
          Password
        </label>
      </div>
      <button
        type="text"
        className="submit"
        onClick={() => {
          validate();
        }}
      >
        Signup
      </button>
     
    </div>
  );
}
