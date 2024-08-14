import React from "react";
import { Link } from "react-router-dom";

const CrewA = () => {
  const isLinkActive = (href) => location.pathname === href;

  return (
    <div className="crew-bg">
      <div className="text-white  crew">
        <div className="firsttext-crew d-flex gap-2 ">
          <p className="m-0">02</p>
          <p className="m-0">MEET YOUR CREW</p>
        </div>
        <div className="d-flex justify-content-between align-items-center text-crew ">
          <div className="d-flex flex-column gap-4 sec-1">
            <h3 className="m-0">COMMANDER</h3>
            <h2 className="m-0">DOUGLAS HURLEY </h2>
            <p className="m-0 para">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
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
              src="/src/assets/crew/image-douglas-hurley.png"
              alt="douglas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewA;
