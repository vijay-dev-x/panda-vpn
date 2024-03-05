import React from "react";
import "./hero.scss";
import Navbar from "../navbar/Navbar";

export default function () {
  return (
    <div className="hero">
      <Navbar></Navbar>
      <div className="wrapper">
        <div className="left-hero">
          <div className="money-back">
            <img src="/money-back.png" alt="" />
            <p>7-day money-back guarantee</p>
          </div>
          <div className="h2">
            <h2>Anonymous Browsing Fast & Secure Connection Easy-to-Use VPN</h2>
          </div>
          <div className="button">
            <button>Get Panda VPN</button>
            <button>Download</button>
          </div>
          <div className="p">
            <p>
              Bypass geo-blocking <br />
              Unlimited access to video, music, social media, and more from
              anywhere in the world
            </p>
          </div>
        </div>
        <div className="right-hero">
          <img src="/hero-right.png" alt="" />
        </div>
      </div>
      <div className="hero-bg">
        <img src="/hero-bottom.png" alt="" />
      </div>
      <div className="hero-bottom-line">
        <img src="/hero-bottom-line.svg" alt="" />
      </div>
    </div>
  );
}
