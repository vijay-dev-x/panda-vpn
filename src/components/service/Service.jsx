import React from "react";
import("./service.scss");

export default function Service() {
  return (
    <div className="service">
      <h1>What services can you enjoy with PandaVPN</h1>
      <div className="service-box">
        <div className="box">
          <div className="img-box">
            <img src="../../../public/service1.png" alt="" />
          </div>
          <div className="text-box">
            <h2>
              Unblock streaming media, watch favored content smoothly anywhere
            </h2>
            <p>
              By bypassing geo-restrictions, you can binge-watch NETFLIX, HULU,
              HBO (Max), AbemaTV, Disney+ and other national streaming platforms
              fluently from anywhere and access your favourite content freely.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="../../../public/sevice2.png" alt="" />
          </div>
          <div className="text-box">
            <h2>
              Hide IP address, stay anonymous online completely with a virtual
              IP
            </h2>
            <p>
              PandaVPN gives you an invisibility cloak on the Internet. All your
              online activity is 100% anonymous and untraceable with encrypted
              connections. Your personal data will be securely protected.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="../../../public/service3.png" alt="" />
          </div>
          <div className="text-box">
            <h2>
              Encrypt all your data, maintain a secure network connection always
            </h2>
            <p>
              Under public WIFI, hackers can steal your password and data,
              threaten your security and property security. Network service
              providers can query your browsing history. PandaVPN encrypts all
              your data and keeps it absolutely safe under any network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
