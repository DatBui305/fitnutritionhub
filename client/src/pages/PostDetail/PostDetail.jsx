import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams

const PostDetail = () => {
  const { id } = useParams(); // Get the post id from URL
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/post/${id}`
        );
        console.log(response);
        setPost(response.data.rs); // Adjust according to your API response structure
        setIsLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      {post && (
        <>
          <div className="flex items-center mb-4">
            <img
              src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-6.jpg"
              className="rounded-full w-12 h-12 border-[3px] border-white shadow-md"
              alt="User Avatar"
            />
            <div className="ml-3">
              <h3 className="text-green-600 text-lg font-semibold">
                {post.author}{" "}
              </h3>
              <p className="text-gray-500 text-sm">about 4 hours ago</p>
            </div>
          </div>
          <h3 className="text-lg border p-4 font-semibold mb-1">
            {post.title}
          </h3>
          <div className="border border-gray-300 p-4 mb-4 rounded">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className="flex space-x-2 my-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetail;
