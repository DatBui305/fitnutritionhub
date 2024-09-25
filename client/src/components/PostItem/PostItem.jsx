import React from "react";
import { FaHeart, FaBell, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostItem = ({ id, title, content, tags }) => {
  console.log(id);
  return (
    <Link to={`/posts/${id}`}>
      <div className="flex items-start bg-white rounded-lg shadow-lg w-[60rem] p-2 space-x-4">
        <img
          src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-6.jpg"
          className="rounded-full w-12 h-12 border-[3px] border-white shadow-md"
          alt="User Avatar"
        />
        <div className="flex-1">
          {/* User Information */}
          <div className="flex items-center space-x-2">
            <h3 className="text-green-600 text-sm font-semibold">
              Kathleen Brown
            </h3>
            <p className="text-gray-500 text-sm">about 4 hours ago</p>
          </div>

          {/* Post Title */}
          <h2 className="text-sm text-gray-800">{title}</h2>

          {/* Post Content */}
          <p className="text-sm text-gray-600">{content}</p>

          {/* Post Tags */}
          <div className="flex space-x-2 my-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded"
              >
                {tag}
              </span>
            ))}
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
    </Link>
  );
};

export default PostItem;
