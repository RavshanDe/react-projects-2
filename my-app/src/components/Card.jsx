import React from "react";
const Card = ({ user: { id, username, email } }) => {
  return (
    <div
      style={{
        width: "350px",
        border: "1px solid black",
        padding: "15px",
        marginRight: "20px",
      }}
    >
      <h1>{username}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default Card;
