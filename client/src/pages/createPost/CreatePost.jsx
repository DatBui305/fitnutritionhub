import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }, { header: 5 }],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "code-block"],
    ["blockquote", "code", "formula"],
    [{ script: "sub" }, { script: "super" }],
    ["clean"],
  ],
};

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }
    const tagList = tags.split(",").map((tag) => tag.trim());
    if (tagList.length > 5) {
      setError("You can only add up to 5 tags.");
      return;
    }
    setLoading(true);
    const postData = {
      title,
      content,
      tags: tagList,
    };
    console.log(postData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/post",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        setSuccess("Post created successfully!");
        setTitle("");
        setContent("");
        setTags("");
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      setError("Failed to create post. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mx-auto p-4">
      {/* Title Input */}
      <input
        className="w-full border border-gray-300 p-2 pt-20 mb-4 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Tags Input */}
      <input
        className="w-full border border-gray-300 p-2 mb-4 rounded"
        type="text"
        placeholder="Tag your post. Maximum 5 tags. At least 1 tag!"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      {/* Rich Text Editor */}
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        modules={modules}
        theme="snow"
        className="mb-4 h-600"
      />

      <div className="flex justify-end mt-14">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </div>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
};

export default CreatePost;
