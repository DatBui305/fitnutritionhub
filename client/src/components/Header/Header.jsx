import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaTh } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header_container">
        {/* Logo Section */}
        <Link to="/" className="header_logo">
          <h1>FitNutritionHub</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="header_nav">
          <Link to="/posts">Posts</Link>
          <Link to="/questions">Questions</Link>
        </nav>

        {/* Search Section */}
        <div className="header_search">
          <input type="text" placeholder="Search" className="search_input" />
          <button className="search_btn">
            <FaSearch />
          </button>
        </div>

        {/* Right-side Actions */}
        <div className="header_actions">
          <button className="header_icon-btn">
            <FaBell />
          </button>
          <button className="header_icon-btn">
            <FaTh />
          </button>
          <button className="header_lang-btn">ENG</button>
          <img
            src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-6.jpg"
            alt="Profile"
            className="header_profile-img"
          />
        </div>
      </div>
    </header>
  );
};
