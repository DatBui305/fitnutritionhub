import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Categories */}
      <ul className="footer_categories">
        <li>
          <Link to="posts/categories/Agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="posts/categories/Business">Business</Link>
        </li>
        <li>
          <Link to="posts/categories/Education">Education</Link>
        </li>
        <li>
          <Link to="posts/categories/Entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="posts/categories/Art">Art</Link>
        </li>
        <li>
          <Link to="posts/categories/Investment">Investment</Link>
        </li>
        <li>
          <Link to="posts/categories/Uncategorized">Uncategorized</Link>
        </li>
        <li>
          <Link to="posts/categories/Weather">Weather</Link>
        </li>
      </ul>

      {/* Footer Bottom Text */}
      <div className="footer_bottom">
        <small>© 2024 FitNutritionHub. All rights reserved.</small>
        <ul className="footer_links">
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
