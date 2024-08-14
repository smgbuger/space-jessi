import React from "react";
import { Link } from "react-router-dom";

const TechnologyB = () => {
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
              <h1>SPACEPORT</h1>
              <p>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
            <div>
              <img
                src="./src/assets/technology/image-spaceport-portrait.jpg"
                alt="pot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyB;
