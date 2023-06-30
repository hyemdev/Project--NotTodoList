import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import {
  HeaderNav,
  HeaderNavLi,
  HeaderTitle,
  HeaderWrap,
} from "../style/Header";

const Header = () => {
  return (
    <div>
      <HeaderWrap>
        <HeaderTitle>!todo list</HeaderTitle>
        <header>
          <div className="">
            <HeaderNav>
              <HeaderNavLi>
                <Link to="/main"> [main] </Link>
              </HeaderNavLi>
              <HeaderNavLi>
                <Link to="/monthlycalendar"> [calendar] </Link>
              </HeaderNavLi>
              <HeaderNavLi>
                <Link to="/summary"> [statistic] </Link>
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
