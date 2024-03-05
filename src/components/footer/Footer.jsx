import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-col">
          <h2>About Us</h2>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p> Service Details</p>
          <p>IP Address Lookup</p>
        </div>
        <div className="footer-col">
          <h2>Download</h2>
          <p>Windows</p>
          <p>Mac</p>
          <p>ios</p>
          <p>Android</p>
          <p>Linux</p>
          <p>Android TV</p>
        </div>
        <div className="footer-col footer-col3">
          <div>
            <h2>Help Center</h2>
            <p>panda7&times;24@gmail.com</p>
            <p>FAQ</p>
          </div>
          <div className="payment">
            <h2>Payment Method</h2>
            <img src="../../../public/payment.png" alt="" />
          </div>
        </div>
        <div className="footer-col">
          <h2>Cooperation</h2>
          <p>Become a Affilliate</p>
        </div>
      </div>
      <div className="copywrite">
        <p>© 2024 PandaVPN. All rights reserved.</p>
      </div>
    </div>
  );
}
