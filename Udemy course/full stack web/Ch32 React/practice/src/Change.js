import React, { useState } from "react";

//state狀態
const Change = () => {
  let [name, setName] = useState("小明");
  let age = 20;

  const new_name = () => {
    setName("小明先生");
  };

  return (
    <div>
      <h1>朋友姓名：{name}</h1>
      <h1>年齡：{age}</h1>
      <button onClick={new_name}> 改名</button>
    </div>
  );
};

export default Change;
