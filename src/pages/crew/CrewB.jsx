import React from "react";
import { Link } from "react-router-dom";
const CrewB = () => {
  const isLinkActive = (href) => location.pathname === href;

  return (
    <div className="crew-bg">
      <div className="text-white crew">
        <div className="firsttext-crew d-flex gap-2">
          <p className="m-0">02</p>
          <p className="m-0">MEET YOUR CREW</p>
        </div>
        <div className="d-flex justify-content-between align-items-center text-crew ">
          <div className="d-flex flex-column gap-4 sec-1">
            <h3 className="m-0">MISSION SPECIALIST</h3>
            <h2 className="m-0">MARK SHUTTLEWORTH </h2>
            <p className="m-0 para">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>

            <div className="d-flex gap-3 navv">
              <Link
                to="/crew/crewA"
                className={`nav-link ${
                  isLinkActive("/crew/crewA") ? "active" : ""
                }`}
              >
                <div className="circle"></div>
              </Link>
              <Link
                to="/crew/crewB"
                className={`nav-link ${
                  isLinkActive("/crew/crewB") ? "active" : ""
                }`}
              >
                <div className="circle"></div>
              </Link>
              <Link
                to="/crew/crewC"
                className={`nav-link ${
                  isLinkActive("/crew/crewC") ? "active" : ""
                }`}
              >
                <div className="circle"></div>
              </Link>
              <Link
                to="/crew/crewD"
                className={`nav-link ${
                  isLinkActive("/crew/crewD") ? "active" : ""
                }`}
              >
                <div className="circle"></div>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="mark-image"
              src="/src/assets/crew/image-mark-shuttleworth.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewB;
