import React from "react";
import "./navbar.scss";
// import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <img src="../../../public/logo.svg" alt="" />
      </div>
      <div className="right-navbar">
        <a href="">Home</a>
        <a href="">Download</a>
        <a href="">Blog</a>
        <a href="">Help center</a>
        <a href="">Sign in</a>
      </div>
    </div>
  );
}