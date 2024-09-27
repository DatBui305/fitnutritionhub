import React, { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

const CommentInput = () => {
  const textareaRef = useRef(null);

  // Hàm tự động điều chỉnh chiều cao khi nhập liệu
  const handleInput = () => {
    // Reset lại chiều cao để tính toán chiều cao mới
    textareaRef.current.style.height = "auto";
    // Tính toán chiều cao dựa trên nội dung và thay đổi chiều cao textarea
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="items-center flex border-gray-300 border p-4 rounded w-full">
      <textarea
        ref={textareaRef}
        className="w-full border border-gray-300 px-4 py-2 rounded resize-none h-14"
        placeholder="Write your response here..."
        rows="1"
        onInput={handleInput} // Gọi hàm khi có sự kiện nhập liệu
        style={{ height: "auto", overflow: "hidden" }} // Chỉnh chiều cao tự động
      />
      <button className="text-gray-600 hover:text-gray-800 w-10 h-10 p-2 ml-2">
        <FaPaperPlane className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CommentInput;
