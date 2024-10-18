import React, { useState, useEffect } from "react";
import LikeAndDislikeNew from "../../features/favorite/LikeAndDislikeNew";
import CommentInputNew from "../../features/comment/CommentInputNew";
import CommentItemNew from "../../features/comment/CommentItemNew";
import { formatTimeCreate } from "../../helps/dateformat";
import axios from "axios";

const QuestionItemDetail = ({ question }) => {
  if (!question) {
    return <div>Loading...</div>;
  }
  console.log(question);

  const [comments, setComments] = useState(question.comments || []);
  const [author, setAuthor] = useState(null);

  const addComment = (newComments) => {
    setComments(newComments);
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      if (!question.idAuthor) {
        console.error("postedBy is undefined or null");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/user/${question.idAuthor}`
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
  }, [question.idAuthor]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [1]);
  useEffect(() => {
    setComments(question.comments || []);
  }, [question.comments]);
  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row ">
          <img
            src={
              author?.avatar
                ? author.avatar
                : "https://cellphones.com.vn/sforum/wp-content/uploads/2023/11/avatar-dep-60.jpg"
            }
            alt=""
            className="w-[80px] h-[80px] border-[3px] rounded-[15px]"
          />
          <div className="px-3">
            <h1 className="text-[#6374AE] font-semibold text-2xl">
              {author?.firstname || "Unknown Author"}
            </h1>
            <h2 className="text-[#839DD1] font-medium text-xl">
              {question.createdAt
                ? formatTimeCreate(question.createdAt)
                : "about ? hours ago"}
            </h2>
          </div>
        </div>
        <div className=" flex flex-row space-x-4">
          {question.tags.map((tag, index) => (
            <div
              key={index}
              className="items-center flex justify-center w-24 h-9 p-2 bg-[#6374AE] text-[#FAF8F6] font-wixmadefor rounded-[5px]"
            >
              {tag || "none"}
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-[#262C40] font-wixmadefor text-4xl font-semibold break-words max-w-[1040px]">
        {question.title ||
          "Wholesome Eats: Nutritious Recipes to Keep You Energized and Healthy?"}
      </h1>
      <div className="pt-3 pb-5">
        <p className="text-[#262C40] font-wixmadefor text-2xl font-medium w-[1040px] break-words max-w-[1040px]">
          {question.content ||
            "Eating well doesn’t have to be complicated! With the right balance of ingredients, you can prepare meals that are both delicious and packed with the nutrients your body needs to stay energized and healthy. In this post, we’re sharing some wholesome recipes that will nourish your body and keep you feeling great throughout the day?"}
        </p>
      </div>
      <LikeAndDislikeNew question={question} />
      <div className="py-3"></div>
      <CommentInputNew question={question} addComment={addComment} />
      <div className="py-3"></div>
      {Array.isArray(comments) && comments.length > 0 ? (
        comments.map((comment, index) => (
          <CommentItemNew key={comment._id} comment={comment} />
        ))
      ) : (
        <div className="text-gray-500">No comments yet.</div>
      )}
    </div>
  );
};

export default QuestionItemDetail;
