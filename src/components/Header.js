import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl">!todo list</h2>
      <header
        className="bg-gray-800 h-14 w-11/12
    mx-auto"
      >
        <div className="">
          <ul className="flex item-center justify-around mt-2">
            <li className="pt-3">
              <Link
                to="/main"
                className="text-white hover:text-red-600 text-lg "
              >
                {" "}
                [main]{" "}
              </Link>
            </li>
            <li className="pt-3">
              <Link
                to="/monthlycalendar"
                className="text-white hover:text-red-600 text-lg "
              >
                {" "}
                [calendar]{" "}
              </Link>
            </li>
            <li className="pt-3">
              <Link
                to="/summary"
                className="text-white hover:text-red-600 text-lg"
              >
                {" "}
                [statistic]{" "}
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <hr className="my-8 border-2 border-black w-screen"></hr>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
