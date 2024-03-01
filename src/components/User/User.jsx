import React from "react";

import "./user.css";

const User = ({ data }) => {
  return (
    <div>
      <div
        className="avatar"
        style={{
          backgroundImage:
            "url(https://www.w3schools.com/howto/img_avatar.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="user_body">
        <div>{data?.name}</div>
        <div>{data?.email}</div>
        <div>{data?.phone}</div>
      </div>
    </div>
  );
};

export default User;
