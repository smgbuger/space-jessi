import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const TechnologyC = () => {
  const isLinkActive = (href) => location.pathname === href;

  return (
    <div className="tech-bg">
      <div className="technology">
        <div className="firsttext-moon d-flex gap-2 text-white">
          <p className="m-0">03</p>
          <p className="m-0">SPACE LAUNCH 101</p>
        </div>

        <div className="d-flex align-items-center justify-content-between termino">
          <div className="text-white numbers">
            <Link
              to="/technology/techA"
              className={`nav-link ${
                isLinkActive("/technology/techA") ? "active" : ""
              }`}
            >
              <div>
                <p className="m-0">1</p>
              </div>
            </Link>
            <Link
              to="/technology/techB"
              className={`nav-link ${
                isLinkActive("/technology/techB") ? "active" : ""
              }`}
            >
              <div>
                <p className="m-0">2</p>
              </div>
            </Link>
            <Link
              to="/technology/techC"
              className={`nav-link ${
                isLinkActive("/technology/techC") ? "active" : ""
              }`}
            >
              <div>
                <p className="m-0">3</p>
              </div>
            </Link>
          </div>
          <div className="d-flex terminology">
            <div className="text-start termino-text ">
              <h4>THE TERMINOLOGY...</h4>
              <h1>SPACE CAPSULE</h1>
              <p>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
            <div>
              <img
                src="/src/assets/technology/image-space-capsule-portrait.jpg"
                alt="capsule"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyC;
