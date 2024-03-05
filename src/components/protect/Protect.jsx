import React from "react";
import("./protect.scss");
export default function Protect() {
  return (
    <div className="protect">
      <div className="wrapper">
        <div className="protect-img">
          <img src="/protect-m.png" alt="" />
        </div>
        <div className="protect-data">
          <div className="h1">
            <h2>Protect all your devices</h2>
          </div>
          <div className="p">
            <p>
              PandaVPN supports all mainstream devices on the market to ensure
              that your private data is protected on multi-platform devices. You
              can enjoy exquisite and user-friendly clients for Windows, Mac,
              iOS, Android, Linux, and Android TV. With PandaVPN, one-click
              connect and server selection, you can access an unlimited network.
            </p>
          </div>
          <div className="logo">
            <div className="logo-box">
              <img src="/protect1.png" alt="" />
              <p>Windows</p>
            </div>
            <div className="logo-box">
              <img src="/protect2.png" alt="" />
              <p>Mac</p>
            </div>
            <div className="logo-box">
              <img src="/protect3.png" alt="" />
              <p>ios</p>
            </div>
            <div className="logo-box">
              <img src="/protect4.png" alt="" />
              <p>Android</p>
            </div>
            <div className="logo-box">
              <img src="/protect5.png" alt="" />
              <p>Linux</p>
            </div>
            <div className="logo-box">
              <img src="/protect6.png" alt="" />
              <p>Android TV</p>
            </div>
          </div>
        </div>
      </div>
      {/* features box----------- */}
      <div className="features">
        <div className="features-box">
          <img src="/features1.png" alt="" />
          <h2>Ultra-fast servers</h2>
          <p>
            All of the servers have implemented patented acceleration
            technology. What’s more, ultra-fast IPLC servers are provided to
            you. No traffic limit, no buffering, no trouble.
          </p>
        </div>
        <div className="features-box">
          <img src="/features2.png" alt="" />
          <h2>Truly no logs policy</h2>
          <p>
            PandaVPN strictly implements no logs policy to ensure that all data
            between applications and platforms are completely anonymous and
            protect your online privacy.
          </p>
        </div>
        <div className="features-box">
          <img src="/features3.png" alt="" />
          <h2>The highest level of ECC encryption</h2>
          <p>
            All of your Internet access can be protected through our highest
            level of secure ECC encryption technology. Therefore, no one can
            snoop your data.
          </p>
        </div>
      </div>
    </div>
  );
}
