import React from "react";
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <div className="cont position-relative">
      <div className="d-flex align-items-center main justify-content-between">
        <div className="main-box">
          <h4 className="fs-3 m-0">SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className="space m-0 text-white my-3">SPACE</h1>
          <p className="m-0 home-para">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link className="circlee text-center " to={"/destination/moon"}>
          <main className="main-hover">
            <button className="buty">Explore</button>
          </main>
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
