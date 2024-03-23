import React from "react";

const Show = ({ messages, setMessage }) => {
  return (
    <div>
      {/* <h1>Show</h1> */}
      {/* <p>{messages}</p> */}
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default Show;
