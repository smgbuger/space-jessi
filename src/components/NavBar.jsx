import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Get the current location
  const isLinkActive = (href) => location.pathname === href;

  return (
    <nav className="d-flex justify-content-between align-items-center text-white position-relative">
      <img src="./src/assets/shared/logo.svg" alt="logo" />
      <div className="line"></div>

      <ul className="d-flex gap-5 sub-nav">
        <Link
          to="/"
          className={`nav-link ${isLinkActive("/") ? "active" : ""}`}
        >
          <li className={`d-flex gap-2 ${isLinkActive("/") ? "active" : ""}`}>
            <p className="m-0 num">00</p>
            <p className="m-0 text">HOME</p>
          </li>
        </Link>
        <Link
          to="/destination/moon"
          className={`nav-link ${
            isLinkActive("/destination/moon") ? "active" : ""
          }`}
        >
          <li
            className={`d-flex gap-2 ${
              isLinkActive("/destination/moon") ? "active" : ""
            }`}
          >
            <p className="m-0 num">01</p>
            <p className="m-0 text">DESTINATION</p>
          </li>
        </Link>

        <Link
          to="/crew/crewA"
          className={`nav-link ${isLinkActive("/crew/crewA") ? "active" : ""}`}
        >
          <li
            className={`d-flex gap-2 ${
              isLinkActive("/crew/crewA") ? "active" : ""
            }`}
          >
            <p className="m-0 num">02</p>
            <p className="m-0 text">CREW</p>
          </li>
        </Link>

        <Link
          to="/technology/techA"
          className={`nav-link ${
            isLinkActive("/technology/techA") ? "active" : ""
          }`}
        >
          <li
            className={`d-flex gap-2 ${
              isLinkActive("/technology/techA") ? "active" : ""
            }`}
          >
            <p className="m-0 num">03</p>
            <p className="m-0 text">TECHNOLOGY</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
