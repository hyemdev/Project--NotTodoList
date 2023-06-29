import React, { useEffect } from "react";
import MonthlyList from "../components/MonthlyList";
import MonthlyForm from "../components/MonthlyForm";
import { getTodo } from "../api/api";

const MonthlyAdd = ({ todoData, setTodoData }) => {

  // axios get호출 todolist data 받기
  useEffect(() => {
    getTodo(setTodoData);
  }, []);
  return (
    <div>
      <div>MonthlyAdd</div>
      <MonthlyList todoData={todoData} setTodoData={setTodoData} />
      <MonthlyForm todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
};

export default MonthlyAdd;
