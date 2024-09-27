import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaTh } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#D9D9D9] fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold  font-lobster">
          FitNutritionHub
        </Link>

        <nav className="space-x-6 ">
          <Link
            to="/posts"
            className=" text-gray-600 hover:text-gray-800 font-semibold"
          >
            Posts
          </Link>
          <Link
            to="/questions"
            className=" text-gray-600 hover:text-gray-800 font-semibold"
          >
            Questions
          </Link>
        </nav>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 focus:outline-none"
          />
          <button className="px-3 py-2 text-black ">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <FaBell />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaTh />
          </button>
          <button className="border px-3 py-1 rounded text-sm font-semibold">
            ENG
          </button>
          <img
            src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-6.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
