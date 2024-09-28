import React from "react";
import { FaArrowUp, FaArrowDown, FaBookmark } from "react-icons/fa";

const LikeDislikeFavorite = ({ likes, dislikes }) => {
  const likeCount = Array.isArray(likes) ? likes.length : 0;
  const dislikeCount = Array.isArray(dislikes) ? dislikes.length : 0;

  const total = likeCount - dislikeCount;

  return (
    <div className="flex flex-col items-center justify-center sticky top-16 space-y-1">
      <button className="p-1 text-gray-400 hover:text-blue-600">
        <FaArrowUp size={60} />
      </button>
      <span className="text-2xl text-gray-400 font-semibold">{total}</span>
      <button className="p-1 text-gray-400 hover:text-red-600">
        <FaArrowDown size={60} />
      </button>
      <button className="p-1 mt-2 text-gray-400 hover:text-yellow-500">
        <FaBookmark size={60} />
      </button>
    </div>
  );
};

export default LikeDislikeFavorite;
