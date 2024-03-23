import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav.js";
import Info from "./Info.js";
import Change from "./Change.js";

function App() {
  const buttonHandler = (msg) => {
    alert("你按了button一次" + msg);
  };

  // let friends = ["A", "B", "C"];
  let friends = [
    { name: "A", age: 16 },
    { name: "B", age: 39 },
    { name: "C", age: 20 },
  ];
  return (
    <div>
      {/* {friends.map((friend) => (
        <Info name={friend.name} age={friend.age} />
      ))} */}
      {/* <button
        onClick={() => {
          buttonHandler("今天天氣不錯");
        }}
      >
        按我一下
      </button> */}
      <Change />
    </div>
    // <div>
    //   <Nav />
    //   <Info name={friends[0]} age={16} />
    //   <Info name={friends[1]} age={39} />
    //   <Info name={friends[2]} age={20} />
    // </div>
  );
}

export default App;
