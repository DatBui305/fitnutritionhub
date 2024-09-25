import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import PostItem from "../../components/PostItem/PostItem";
import QuestionItem from "../../components/QuestionItem/QuestionItem";
import NavBar from "../../components/NavBar/NavBar";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/post");
        if (response.data.success) {
          setPosts(response.data.posts); // Set the posts state with fetched data
        } else {
          console.error("Failed to fetch posts:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Call the fetch function on component mount
  }, []); // Empty dependency array ensures it runs only once

  // Function to strip HTML tags from a string
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  posts.map((post) => console.log(post._id, post.title));

  return (
    <div>
      <NavBar />
      <div className="flex space-x-1">
        <div className="space-y-3 pl-48">
          {posts.map((post) => (
            <PostItem
              key={post._id}
              id={post._id}
              title={post.title}
              content={stripHtml(post.content)} // Convert HTML to plain text
              tags={post.tags}
            />
          ))}
        </div>

        {/* Right Section (Questions) */}
        <div className="space-y-3">
          <div>
            <h1 className="font-bold text-green-600 text-lg border-b-2 border-gray-300 pb-1">
              Newest Questions
            </h1>
          </div>
          {/* Render QuestionItem components as needed */}
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
          <QuestionItem />
        </div>
      </div>
    </div>
  );
};

export default Posts;
