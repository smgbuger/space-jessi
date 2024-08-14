import React from "react";
import { Link } from "react-router-dom";
const CrewC = () => {
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
            <h3 className="m-0">PILOT</h3>
            <h2 className="m-0">VICTOR GLOVER</h2>
            <p className="m-0 paragraph">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
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
              src="./src/assets/crew/image-victor-glover.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewC;
