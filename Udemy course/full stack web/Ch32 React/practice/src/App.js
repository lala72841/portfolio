import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //navigation bar不會變
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>{" "}
          //把這個component放在首頁中
          <Route path="about" element={<About />}></Route>{" "}
          //把這個component放在about中
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
