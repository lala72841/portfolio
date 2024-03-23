import React, { useState } from "react";

const Form = ({ messages, setMessages }) => {
  let [input, setInput] = useState(""); //input預設是空字串
  //   let [messages, setMessages] = useState([]);
  const inputHandler = (e) => {
    setInput(e.target.value); //紀錄input值
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, input]); //spread array，把原本的msg加上input值
    setInput("");
  };

  return (
    <form>
      <input onChange={inputHandler} value={input} type="text"></input>
      <button onClick={clickHandler}>Submit</button>
    </form>
  );
};

export default Form;
