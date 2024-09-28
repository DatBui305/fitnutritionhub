import React, { useState, useEffect, useContext } from "react";
import UserAvatar from "../../components/userInformation/UserAvatar";
import UserInfomation from "../../components/userInformation/UserInfomation";
import ReplyItem from "./ReplyItem";
import ReplyInput from "./ReplyInput";
import { formatTimeCreate } from "../../helps/dateformat";
import { AuthContext } from "../../context/AuthContext";

const CommentItem = ({
  _id,
  pid,
  user,
  comment,
  dateCreate,
  replies: initialReplies,
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replies, setReplies] = useState(initialReplies);
  const { accessToken } = useContext(AuthContext);

  const handleReplyClick = () => setShowReplyInput(!showReplyInput);

  const addReply = (newReply) => {
    setReplies(newReply); // Append new reply
  };
  const changeInput = (newChange) => {
    setShowReplyInput(newChange);
  };

  return (
    <div className="border bg-white max-w-7xl space-y-4 pb-8">
      <div className="text-lg">
        <div className="flex items-center space-x-4 pl-4 pt-5">
          <UserAvatar src={user.avatar} />
          <UserInfomation
            name={user.firstname}
            timecreate={formatTimeCreate(dateCreate)}
          />
        </div>
        <h3 className="text-lg pl-20 mb-1">{comment}</h3>
        <button onClick={handleReplyClick} className="ml-20 mt-2 text-blue-500">
          Reply
        </button>
        {showReplyInput && (
          <ReplyInput
            pid={pid}
            accessToken={accessToken}
            addReply={addReply}
            changeInput={changeInput}
            cid={_id}
          />
        )}
      </div>
      {replies.map((reply, index) => (
        <div key={index}>
          <hr className="border-t border-gray-300 my-2" />
          <ReplyItem
            user={user}
            _id={reply._id}
            comment={reply.comment}
            dateCreate={formatTimeCreate(reply.dateCreate)}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentItem;
