import React from "react";
import { Link } from "react-router-dom";
import enter from "../pages/enter.jpg";

const Enterance = () => {
  return (
    <div className="">
      <img src={enter} alt="img" className="w-screen"/>
        <Link to="/main" className="bg-slate-500  text-white p-4 rounded-md">
          ENTER
        </Link>
      </div>
  );
};

export default Enterance;
