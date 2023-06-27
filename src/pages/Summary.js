import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import WeeklySummary from "../components/WeeklySummary";
import MonthlySummary from "../components/MonthlySummary";


const Summary = () => {
  const dataBar = [
    { behavior: "첫째주", tobacco: 1, drink: 1, drug: 3 },
    { behavior: "둘째주", tobacco: 2, drink: 2, drug: 4 },
    { behavior: "셋째주", tobacco: 3, drink: 3, drug: 5 },
  ];
  return (
    <>
      <WeeklySummary/>
      <MonthlySummary/>
    </>
  );
};

export default Summary;
