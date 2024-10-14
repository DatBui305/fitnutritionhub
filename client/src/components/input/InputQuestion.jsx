import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const InputQuestion = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    const arrTags = tags.split(" ");
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        "http://localhost:5000/api/v1/question/",
        {
          title: title,
          content: content,
          tags: arrTags,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      setErrorMessage("Create question failed. Please check your input.");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-[800px] bg-[#F2F7FB] border-[3px] border-[#6374AE] rounded-[30px]">
      <h1 className="px-5 pt-5 text-3xl font-wixmadefor text-[#262C40] font-bold">
        Got a Question To Asks? Share It With Humans!
      </h1>
      <p className="px-5 pb-7 text-[#839DD1] font-wixmadefor font-normal text-2xl">
        Inspire others with your culinary creations! We'd love to see what
        you’re cooking up.
      </p>
      <div className="px-5 ">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-[1000px] h-[70px] border-[3px] border-[#9CB6DD] rounded-[15px] placeholder:text-[#9CB6DD] text-[#9CB6DD] text-2xl font-semibold p-5 focus:outline-none"
          placeholder="Give Your Question a Name!..."
        />
      </div>
      <div className="px-5 pt-3">
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
          className="h-[70px] w-[800px] bg-[#F2F7FB] placeholder:text-[#9CB6DD] text-[#9CB6DD] p-5 focus:outline-none text-2xl font-semibold "
          placeholder="Add Tags to Make It Easier to Discover! (Max: 5 tags)"
        />
        <hr className="w-[800px] h-[3px] bg-[#9CB6DD] rounded-[5px]" />
      </div>
      <div className="p-5 flex flex-row justify-between">
        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-[800px] h-[470px] border-[3px] border-[#9CB6DD] rounded-[15px] placeholder:text-[#9CB6DD] text-[#9CB6DD] text-2xl font-semibold p-5 focus:outline-none"
          placeholder="Write a Question and Share Your Problems!..."
        />
        <div className="">
          <div className="w-full h-[410px]"></div>
          {errorMessage && (
            <div className="text-red-500 text-center my-4">{errorMessage}</div>
          )}
          <button
            onClick={handleCreate}
            className="w-[180px] h-[60px] bg-[#6374AE] rounded-[15px] flex items-center justify-around"
          >
            <h1 className="font-wixmadefor text-[#F2F7FB] text-2xl font-semibold">
              Create
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputQuestion;
