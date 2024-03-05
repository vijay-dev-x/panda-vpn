import React from "react";
import "./plan.scss";

export default function Plan() {
  return (
    <div className="plan">
      <div className="wrapper">
        <div className="h1">
          <h1>Select a Plan</h1>
          <p>Secure up to 3 devices for all plans</p>
        </div>
        <div className="middle">
          <div className="middle-content">
            <img src="../../../public/plan-middle.png" alt="" />
            <p>Customize Multiple Devices</p>
          </div>
        </div>
        <div className="plan-list">
          <div className="box">
            <img src="../../../public/plan-list-1.png" alt="" />
            <div className="data">
              <p>12 Months</p>
              <p>+12 month free</p>
              <h2>$2.49</h2>
              <p>per month</p>
              <span>83% OFF</span>
              <p>7-day money back grantee</p>
              <button>Get Panda VPN</button>
            </div>
          </div>
          <div className="box">
            <img src="../../../public/plan-list-2.png" alt="" />
            <div className="data">
              <p>6 Months</p>
              <p>+6 month free</p>
              <h2>$3.99</h2>
              <p>per month</p>
              <span>72% OFF</span>
              <p>7-day money back grantee</p>
              <button>Get Panda VPN</button>
            </div>
          </div>
          <div className="box">
            <img src="../../../public/plan-list-3.png" alt="" />
            <div className="data">
              <p>3 Months</p>
              <p>&nbsp;</p>
              <h2>$2.49</h2>
              <p>per month</p>
              <span>52% OFF</span>
              <p>7-day money back grantee</p>
              <button>Get Panda VPN</button>
            </div>
          </div>
          <div className="box">
            <img src="../../../public/plan-list-4.png" alt="" />
            <div className="data">
              <p>12 Months</p>
              <p>&nbsp;</p>
              <h2>$9.99</h2>
              <p>per month</p>
              <span>31% OFF</span>
              <p>7-day money back grantee</p>
              <button>Get Panda VPN</button>
            </div>
          </div>
        </div>
        <div className="button">
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
