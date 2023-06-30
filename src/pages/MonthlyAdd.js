import React from "react";
import MonthlyList from "../components/MonthlyList";
import MonthlyForm from "../components/MonthlyForm";

const MonthlyAdd = ({ todoData, setTodoData }) => {

  return (
    <div>
      <h2>한달목표 설정하기</h2>
      <MonthlyList todoData={todoData} setTodoData={setTodoData} />
      <MonthlyForm todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
};

export default MonthlyAdd;
