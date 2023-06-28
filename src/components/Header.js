import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl">!todo list</h2>
      <header
        className="bg-[#d9d9d9] h-14 w-auto
    mx-auto"
      >
        <div className="">
          <ul className="flex item-center justify-around">
            <li>
              <Link
                to="/main"
                className="text-black hover:text-red-600 text-lg "
              >
                {" "}
                [main]{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/monthlycalendar"
                className="text-black hover:text-red-600 text-lg "
              >
                {" "}
                [calendar]{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/summary"
                className="text-black hover:text-red-600 text-lg"
              >
                {" "}
                [summary]{" "}
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <hr className="my-3 border-2 border-black"></hr>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
