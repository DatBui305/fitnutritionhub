import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItemTini from "../../components/postItem/PostItemTini";

const SideBarRightPost = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/post`);
        if (response.data.success) {
          const sortedPosts = response.data.posts.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          // Lấy 3 câu hỏi mới nhất
          const latestPosts = sortedPosts.slice(0, 3);
          setPosts(latestPosts);
          console.log(latestPosts);
        } else {
          console.error("Failed to fetch posts:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setErrorMessage("Failed to load posts. Please try again later.");
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="w-full bg-[#F2F7FB] py-5">
      <h1 className="px-10 text-3xl font-wixmadefor text-[#6374AE] font-bold">
        Related <br />
        posts
      </h1>
      <div className="px-10 py-5">
        <hr className="w-[330px] h-[3px] bg-[#9CB6DD] rounded-[5px]" />
      </div>

      <div>
        {posts.map((post) => (
          <PostItemTini
            _id={post._id}
            title={post.title}
            idAuthor={post.idAuthor}
            createdAt={post.createdAt}
            key={post._id}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBarRightPost;
