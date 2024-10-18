import React, { useState, useEffect } from "react";
import { formatTimeCreate } from "../../helps/dateformat";
import axios from "axios";

const PostItemTini = ({ _id, title, idAuthor, createdAt }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      if (!idAuthor) {
        console.error("postedBy is undefined or null");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/user/${idAuthor}`
        );
        if (response.data.success) {
          setAuthor(response.data.rs);
        } else {
          console.error("Failed to fetch author:", response.data);
        }
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [idAuthor]);

  return (
    <div>
      <div className="px-10 pb-3">
        <h1 className="font-wixmadefor text-[#6374AE] font-bold text-2xl">
          {author?.firstname || "Unknown Author"}
        </h1>
        <h3 className="font-wixmadefor text-[#839DD1] font-normal">
          {createdAt ? formatTimeCreate(createdAt) : "about ? hours ago"}
        </h3>
        <p className="font-wixmadefor text-lg text-[#262C40] font-semibold pb-3">
          {title
            ? truncateText(title, 30)
            : "Wholesome Eats: Nutritious Recipes to Keep You Energized and..."}
        </p>
        <hr className="bg-[#D3E2F2] rounded-[5px] h-[3px] w-[330px] " />
      </div>
    </div>
  );
};

export default PostItemTini;
