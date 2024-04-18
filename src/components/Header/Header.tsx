import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import React from "react";

const Header = () => {
  return (
    <div className="bg-purple-700 px-4 shadow-md">
      <div className="flex justify-between items-center mb-3">
        <p className="text-4xl font-bold ml-2">Crystal Cave</p>i
        <nav className="mb-3 mt-6 ml-2 mr-2">
          <ul className="flex">
            <li
              className="px-2 text-white text-xl bg-purple-900 pb-2 pt-2 pl-2 pr-2 
                     font-medium mr-3 mb-2 rounded"
            >
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li
              className="px-2 text-white text-xl bg-purple-900 pb-2 pt-2 pl-2 pr-2 
                     font-medium mr-3 mb-2 rounded"
            >
              <Link to={ROUTES.POPULAR}>Popular</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
