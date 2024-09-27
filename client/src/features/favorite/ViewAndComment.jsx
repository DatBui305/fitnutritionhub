import React from "react";
import { FaEye, FaComment, FaBookmark } from "react-icons/fa"; // Thay đổi các icon

const ViewAndComment = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-400 font-semibold">Xem</span>
      <FaEye size={20} />
      <span className="text-sm text-gray-400 font-semibold">0</span>
      <FaComment size={20} />
      <span className="text-sm text-gray-400 font-semibold">Bình luận</span>
      <FaBookmark size={20} />
    </div>
  );
};

export default ViewAndComment;
