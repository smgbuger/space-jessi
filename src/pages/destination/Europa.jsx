import React from "react";
import { Link, useLocation } from "react-router-dom";

const Europa = () => {
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
            <img src="/src/assets/destination/image-europa.png" alt="europa" />
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
            <h1 className="m-0">EUROPA</h1>
            <p className="moon-para m-0">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover's dream. With an icy surface, it's perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
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

export default Europa;
