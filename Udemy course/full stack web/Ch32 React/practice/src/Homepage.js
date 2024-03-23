import React from "react";
import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/homepage">連結到首頁</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Homepage;
