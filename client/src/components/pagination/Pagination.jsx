import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
