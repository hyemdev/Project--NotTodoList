import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  return (
    <><header>
    <div className="bg-gray-800 text-center">
      <h2 className="text-gray-100 text-lg"> !todo list</h2>
          <ul className="flex space-x-4 items-center justify-around h-32">
            <li>
              <Link to="/main" className="text-gray-300  hover:text-blue-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                main
              </Link>
            </li>
            <li>
              <Link
                to="/monthlycalendar"
                className="text-gray-300  hover:text-blue-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                calendar
              </Link>
            </li>
            <li>
              <Link to="/summary"  className="text-gray-300  hover:text-blue-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                summary
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
