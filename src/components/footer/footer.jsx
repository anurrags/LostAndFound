import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-lists">
        <div className="footer-first">
          <h1>About Us</h1>
          <ul className="footer-list">
            <li> How It works</li>

            <li>Report found</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Anti-Scam</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="footer-sec">
          <h1>Contact</h1>
          <ul className="footer-list">
            <li>Contact Us</li>
            <li>Countries</li>
          </ul>
        </div>
        <div className="footer-third">
          <h1>My Account</h1>
          <ul className="footer-list">
            <li>Log In</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
      <p>© 2023 Missingify. All Rights Reserved.</p>
    </div>
  );
};

export default footer;
