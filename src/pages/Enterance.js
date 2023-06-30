import React from "react";
import { Link } from "react-router-dom";


const Enterance = () => {
  

  return (
    <div className="w-full h-full">
      <img src={process.env.PUBLIC_URL + '/enter.jpg'} alt="img" className="h-full w-full" /> 
      
        <Link to="/main" className=" p-8 rounded-md fixed left-2/4 bottom-1/4 text-3xl -skew-x-12 -rotate-3 text-yellow-200  bg-black hover:text-black hover:bg-[#fbe23f] hover:border-solid border-2 border-black">
          ENTER
        </Link>
      </div>
  );
};

export default Enterance;
