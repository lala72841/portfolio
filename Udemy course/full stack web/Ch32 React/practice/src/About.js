import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/info">關於</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
