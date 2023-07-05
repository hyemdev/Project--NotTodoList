import React from "react";
import MonthlyListItem from "./MonthlyListItem"

const MonthlyList = ({ todoData, setTodoData }) => {
  console.log(todoData);
  return (
    <>
      {todoData.map(item => (
        <MonthlyListItem
          key={item.goalId}
          item={item}
          notTodo={item.notTodo}
          costCategory={item.costCategory}
          goalCost={item.goalCost}
          // startDate={item.startDateFormat}
          // endDate={item.startDateFormat}
          monthYear={item.monthYear}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))}
    </>
  );
};

export default MonthlyList;
