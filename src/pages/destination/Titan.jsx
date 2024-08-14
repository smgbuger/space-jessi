import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Titan = () => {
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
            <img src="/src/assets/destination/image-titan.png" alt="Titan" />
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
            <h1 className="m-0">TITAN</h1>
            <p className="moon-para m-0">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
            <hr />

            <div className="d-flex gap-5">
              <div>
                <p className="sub m-0">AVG. DISTANCE</p>
                <h3 className="sub-t m-0">1.6 BIL. KM</h3>
              </div>
              <div>
                <p className="sub m-0">EST. TRAVEL TIME</p>
                <h3 className="sub-t m-0">7 YEARS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titan;
