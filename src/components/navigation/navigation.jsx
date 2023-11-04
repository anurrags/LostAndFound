import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import logo from "./logo.png";
const navigation = () => {
  return (
    <div className="navigation">
      <div className="left">
        <img src={logo} className="logo-img" />
      </div>
      <div className="title">
        <span>Missingify</span>
      </div>
      <div className="right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
      </div>
    </div>
  );
};

export default navigation;
