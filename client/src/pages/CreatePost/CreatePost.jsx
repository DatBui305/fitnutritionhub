import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreatePost.css";
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

    try {
      const response = await axios.post(
        "https://localhost:5000/api/post",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
    <div className="create-post-container">
      <input
        className="create-post-title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="create-post-tags"
        type="text"
        placeholder="Tag your post. Maximum 5 tags. At least 1 tag!"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        modules={modules}
        theme="snow"
        className="create-post-editor"
      />
      <div className="create-post-actions">
        <div className="publish-dropdown">
          <button
            className="publish-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default CreatePost;
