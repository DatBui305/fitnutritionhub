import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaTh } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext
import UserAvatar from "../../components/userInformation/UserAvatar"; // Import UserAvatar

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="bg-[#D9D9D9] fixed top-0 flex items-center  left-0 w-full h-[5rem] z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold  font-lobster">
          FitNutritionHub
        </Link>

        <nav className="space-x-6 ">
          <Link
            to="/posts"
            className=" text-gray-600 text-xl hover:text-gray-800 font-semibold"
          >
            Posts
          </Link>
          <Link
            to="/questions"
            className=" text-gray-600 text-xl hover:text-gray-800 font-semibold"
          >
            Questions
          </Link>

          <Link
            to="/questions"
            className=" text-gray-600 text-xl hover:text-gray-800 font-semibold"
          >
            Recipes
          </Link>
          <Link
            to="/questions"
            className=" text-gray-600 text-xl hover:text-gray-800 font-semibold"
          >
            Excercises
          </Link>
        </nav>

        <div className="flex items-center w-[25rem] border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 h-[3rem] w-full focus:outline-none"
          />
          <button className="bg-[#0B6E4F] h-[3rem] flex justify-center items-center w-[5rem]">
            <FaSearch className="text-white" size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 w-[3rem] h-[3rem] hover:text-gray-800">
            <FaBell className="w-[4rem]" size={20} />
          </button>
          <button className="text-gray-600 w-[3rem] h-[3rem] hover:text-gray-800">
            <FaTh className="w-[4rem]" size={20} />
          </button>
          <button className="border px-3 py-1 w-[6rem] h-[3rem] rounded text-sm font-semibold">
            ENG
          </button>
          {user ? (
            <UserAvatar src={user.avatar} />
          ) : (
            <Link to="/login" className="text-gray-600 hover:text-gray-800">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
