import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 h-[10rem] text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-lg">
        <small className="text-center md:text-left">
          © 2024 FitNutritionHub. All rights reserved.
        </small>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <Link
              to="/about"
              className="hover:text-white transition-colors duration-200"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="hover:text-white transition-colors duration-200"
            >
              Help
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="hover:text-white transition-colors duration-200"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
