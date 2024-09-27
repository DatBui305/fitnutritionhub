import React, { useState, useEffect } from "react";
import UserAvatar from "../../components/userInformation/UserAvatar";
import UserInfomation from "../../components/userInformation/UserInfomation";
import ReplyItem from "./ReplyItem";
import { format, formatDistanceToNow } from "date-fns";
import { formatTimeCreate } from "../../helps/dateformat";

const CommentItem = ({ _id, user, comment, dateCreate, replies }) => {
  return (
    <div className="border bg-white max-w-7xl space-y-4 pb-8">
      <div className="text-lg">
        <div className="flex items-center space-x-4 pl-4 pt-5">
          <UserAvatar src={user.avatar} />
          <UserInfomation name={user.firstname} timecreate={dateCreate} />
        </div>
        <h3 className="text-lg pl-20 mb-1">{comment}</h3>
      </div>
      <div>
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
    </div>
  );
};

export default CommentItem;
