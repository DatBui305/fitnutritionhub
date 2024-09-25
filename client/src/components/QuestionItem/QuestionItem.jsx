import React from "react";
import { FaHeart, FaBell, FaComment } from "react-icons/fa";

const QuestionItem = () => {
  return (
    <div className="flex items-start bg-white rounded-lg shadow-lg w-[25rem] p-4 space-x-4">
      <div className="flex-1">
        {/* User Information */}
        <div className="flex items-center space-x-2">
          <h3 className="text-green-600 text-sm font-semibold">
            Kathleen Brown
          </h3>
          <p className="text-gray-500 text-sm">about 4 hours ago</p>
        </div>

        {/* Post Title */}
        <h2 className="text-sm text-gray-800">
          Ethical and Environmental Impacts of AI in the Energy Sector...
        </h2>

        {/* Post Tags */}
        <div className="flex space-x-2 my-2">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded">
            Cooking
          </span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded">
            Asia
          </span>
        </div>

        {/* Interaction Icons */}
        <div className="flex space-x-4 mt-2 text-gray-500">
          <div className="flex items-center space-x-1">
            <FaHeart />
            <span className="text-sm">10</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaBell />
            <span className="text-sm">2</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaComment />
            <span className="text-sm">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
