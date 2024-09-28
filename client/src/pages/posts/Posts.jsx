import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "../../components/postItem/PostItem";
import QuestionItem from "../../components/questionItem/QuestionItem";
import Pagination from "../../components/pagination/Pagination";
import NavBar from "../../layout/navBar/NavBar";
import { stripHtml } from "../../helps/stripHtml";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/post?page=${currentPage}`
        );
        if (response.data.success) {
          setPosts(response.data.posts);
          setTotalPages(response.data.totalPages); // Update total pages for pagination
        } else {
          console.error("Failed to fetch posts:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <div className="pt-16">
      <NavBar />
      <div className="flex space-x-1 ">
        <div className="space-y-3 pl-48 pb-8">
          {posts.map((post) => (
            <PostItem
              key={post._id}
              id={post._id}
              title={post.title}
              content={stripHtml(post.content)}
              tags={post.tags}
              views={post.views}
              likes={post.likes}
              dislikes={post.dislikes}
              comments={post.comments}
              idAuthor={post.idAuthor}
              createdAt={post.createdAt}
            />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage} // Update the current page when changed
          />
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
        </div>
      </div>
    </div>
  );
};

export default Posts;
