import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-purple-900 px-2 shadow-md pt-1 pb-1">
      <div className="flex justify-between items-center mb-1">
        <img
          src="https://saki.ichoria.org/f/yle3v/Untitled_design.png"
          alt=""
          className="w-16 h-16 ml-2 mt-1"
        />
        <p className="text-4xl text font-bold mt-1 mr-72 text-white">
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
            <li className="header-button">
              <Link to={ROUTES.FAVORITES}>Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
