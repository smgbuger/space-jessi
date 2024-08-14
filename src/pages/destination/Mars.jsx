import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Mars = () => {
  const location = useLocation(); // Get the current location
  const isLinkActive = (href) => location.pathname === href;

  return (
    <div className="destination-bg">
      <div className="text-white text-start moon">
        <div className="firsttext-moon d-flex gap-2">
          <p className="m-0">01</p>
          <p className="m-0">PICK YOUR DESTINATION</p>
        </div>
        <div className="d-flex align-items-center moon-div">
          <div>
            <img src="/src/assets/destination/image-mars.png" alt="mars" />
          </div>
          <div className="moon-text d-flex flex-column gap-3">
            <ul className="d-flex list-unstyled gap-5 nav">
              <Link
                to="/destination/moon"
                className={`nav-link ${
                  isLinkActive("/destination/moon") ? "active" : ""
                }`}
              >
                <li>MOON</li>
              </Link>
              <Link
                to="/destination/mars"
                className={`nav-link ${
                  isLinkActive("/destination/mars") ? "active" : ""
                }`}
              >
                <li>MARS</li>
              </Link>
              <Link
                to="/destination/europa"
                className={`nav-link ${
                  isLinkActive("/destination/europa") ? "active" : ""
                }`}
              >
                <li>EUROPA</li>
              </Link>
              <Link
                to="/destination/titan"
                className={`nav-link ${
                  isLinkActive("/destination/titan") ? "active" : ""
                }`}
              >
                <li>TITAN</li>
              </Link>
            </ul>
            <h1 className="m-0">MARS</h1>
            <p className="mars-para m-0">
              Don't forget to pack your hiking boots. You'll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It's two and a half times the size of Everest!
            </p>
            <hr />

            <div className="d-flex gap-5">
              <div>
                <p className="sub m-0">AVG. DISTANCE</p>
                <h3 className="sub-t m-0">225 MIL. KM</h3>
              </div>
              <div>
                <p className="sub m-0">EST. TRAVEL TIME</p>
                <h3 className="sub-t m-0">9 MONTHS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mars;
