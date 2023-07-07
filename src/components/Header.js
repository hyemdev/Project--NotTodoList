import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import {
  HeaderNav,
  HeaderNavLi,
  HeaderSubtitle,
  HeaderTitle,
  HeaderWrap,
} from "../style/HeaderCSS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChartColumn,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <HeaderWrap>
        <HeaderTitle className="drop-shadow-md">
          <h2> <b>!</b>Todo List</h2>
        </HeaderTitle>
        <HeaderSubtitle>Record your bad things.</HeaderSubtitle>
        <header>
          <div>
            <HeaderNav>
              <HeaderNavLi>
                <Link to="/main">
                  {" "}
                  <FontAwesomeIcon icon={faHouse} className="text-lg" />{" "}
                  <p>MAIN</p>
                </Link>
              </HeaderNavLi>
              <HeaderNavLi>
                <Link to="/monthlycalendar">
                  {" "}
                  <FontAwesomeIcon icon={faCalendar} className="text-lg" />{" "}
                  <p>CALENDAR</p>{" "}
                </Link>
              </HeaderNavLi>
              <HeaderNavLi>
                <Link to="/summary">
                  {" "}
                  <FontAwesomeIcon
                    icon={faChartColumn}
                    className="text-lg"
                  />{" "}
                  <p>STATISTICS</p>
                </Link>
              </HeaderNavLi>
            </HeaderNav>
          </div>
        </header>
      </HeaderWrap>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
