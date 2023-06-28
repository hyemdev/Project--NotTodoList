import React from "react";
import WeeklySummary from "../components/WeeklySummary";
import MonthlySummary from "../components/MonthlySummary";
import WeeklySummary2 from "../components/WeeklySummary2";
import MonthlySummary2 from "../components/MonthlySummary2";

const Summary = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex-1">
          <WeeklySummary />
          <MonthlySummary />
        </div>
        <div className="flex-1">
        <WeeklySummary2 />
          <MonthlySummary2 />
        </div>
      </div>
    </>
  );
};

export default Summary;