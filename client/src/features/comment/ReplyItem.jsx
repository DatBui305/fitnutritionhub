import React, { useState, useEffect } from "react";
import UserInfomation from "../../components/userInformation/UserInfomation";
import UserAvatar from "../../components/userInformation/UserAvatar";
import { formatTimeCreate } from "../../helps/dateformat";

const ReplyItem = ({ _id, user, comment, dateCreate }) => {
  return (
    <div>
      <div className="text-lg pl-4">
        <div className="flex items-center space-x-4 pl-4 pt-5">
          <UserAvatar src={user.avatar} />
          <UserInfomation
            name={user.firstname}
            timecreate={formatTimeCreate(dateCreate)}
          />
        </div>
        <h3 className="text-lg pl-20  mb-1">{comment}</h3>
      </div>
    </div>
  );
};

export default ReplyItem;
