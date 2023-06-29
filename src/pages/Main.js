import React from "react";
import MemoSection from "../components/MemoSection";
import BriefSection from "../components/BriefSection";
import DailySection from "../components/DailySection";

const Main = ({ todoData, setTodoData }) => {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-1 mt-2 ml-10">
        <div className="box-border h-full p-4">
          <MemoSection />
        </div>
        <div className="row-span-2 box-border h-full p-4">
          <BriefSection />
        </div>
        <div className="row-span-3 box-border h-full p-4">
          <DailySection todoData={todoData} setTodoData={setTodoData} />
        </div>
      </div>
    </>
  );
};

export default Main;
