import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form.js";
import Show from "./Show.js";

function App() {
  // let [messages, setMessages] = useState([]);
  let [myName, setName] = useState("王小明");
  const clickHandler = () => {
    setName("王大明");
  };
  useEffect(() => {
    console.log("userEffect func正在執行");
  }, [myName]);

  return (
    <div>
      {/* <Form messages={messages} setMessages={setMessages} /> */}
      {/* <Show messages={messages} setMessages={setMessages} /> */}
      <h1>{myName}</h1>
      <button onClick={clickHandler}>改名</button>
    </div>
  );
}

export default App;
