import React from "react";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-img">
        <div className="banner-left">
          <h2>Limited time offer</h2>
          <h1>12 month +12 month free</h1>
          <h1>
            $2.49<span>/mo</span>
          </h1>
          <p>83% OFF</p>
          <button>GET Now</button>
        </div>
        <div className="banner-right">
          <img src="/banner-right.png" alt="" />
        </div>
      </div>
    </div>
  );
}
