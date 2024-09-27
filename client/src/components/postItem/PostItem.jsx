import React from "react";
import { FaHeart, FaBell, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserAvatar from "../userInformation/UserAvatar";
import UserInfomation from "../userInformation/UserInfomation";
import Tags from "../tags/Tags";

const PostItem = ({ id, title, content, tags }) => {
  // Function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <Link to={`/posts/${id}`}>
      <div className="flex items-start bg-white rounded-lg shadow-lg w-[60rem] p-2 space-x-4">
        <UserAvatar src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-6.jpg" />
        <div className="flex-1">
          <UserInfomation
            name="Kathleen Brown"
            timecreate="about 4 hours ago"
          />

          {/* Post Title (Truncated) */}
          <h2 className="text-sm text-gray-800">
            {truncateText(title, 50)} {/* Adjust maxLength as needed */}
          </h2>

          {/* Post Content (Truncated) */}
          <p className="text-sm text-gray-600">
            {truncateText(content, 100)} {/* Adjust maxLength as needed */}
          </p>

          {/* Post Tags */}
          <Tags tags={tags} />

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
