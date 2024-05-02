import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-purple-900 px-2 shadow-md pt-1 pb-1">
      <div className="flex justify-between items-center mb-1">
        <p className="text-5xl text font-bold ml-2">
          <Link to={ROUTES.HOME}>Cyberia Movies</Link>
        </p>
        <nav className="mb-3 mt-3 ml-3 mr-3">
          <ul className="flex">
            <li className="header-button">
              <Link to={ROUTES.NOW_PLAYING}>Now Playing</Link>
            </li>
            <li className="header-button">
              <Link to={ROUTES.POPULAR}>Popular</Link>
            </li>
            <li className="header-button">
              <Link to={ROUTES.UPCOMING}>Upcoming</Link>
            </li>
            <li className="header-button">
              <Link to={ROUTES.TOP_RATED}>Top Rated</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
