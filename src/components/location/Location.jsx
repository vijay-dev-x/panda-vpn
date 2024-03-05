import React from "react";
import "./location.scss";
export default function Location() {
  return (
    <div className="location">
      <div className="wrapper">
        <div className="img">
          <img src="../../../public/loaction-world.png" alt="" />
        </div>
        <div className="data">
          <h1>Enjoy fast and stable connection anywhere, anytime</h1>
          <p>
            The internet is slow and unbearable? Don't worry. PandaVPN currently
            supports over 3000 servers in 170 VPN server locations in 80
            countries, and the number is still growing. This ensures that no
            matter where you are, you can always find a high-bandwidth and
            low-latency server nearby and enjoy the best network performance.
          </p>
          <img src="../../../public/location-country.png" alt="" />
          <button>See VPN Locations</button>
        </div>
      </div>
      {/* features----------- */}
      <div className="features">
        <div>
          <img src="../../../public/location-f1.png" alt="" />
          <h2>Unblock GEO restrictions</h2>
          <p>
            PandaVPN will change your virtual location, and help you unblock the
            restrictions to visit websites, play games and watch streaming
            videos.
          </p>
        </div>
        <div>
          <img src="../../../public/location-f2.png" alt="" />
          <h2>No bandwidth nor traffic limit</h2>
          <p>
            PandaVPN will speed up your network. The server bandwidth can reach
            10Gbps, without traffic limitation.
          </p>
        </div>
        <div>
          <img src="../../../public/location-f3.png" alt="" />
          <h2>Global technique support</h2>
          <p>
            You can talk directly to our tech support or even developers for
            help. Our technical staff will help you solve all of your problems.
          </p>
        </div>
      </div>
    </div>
  );
}
