import React from "react";
import MonthlyListItem from "./MonthlyListItem"

const MonthlyList = ({ todoData, setTodoData }) => {
  console.log(todoData);
  return (
    <>
      {todoData.map(item => (
        <MonthlyListItem
          key={item.id}
          item={item}
          options={item.options}
          // startDate={item.startDateFormat}
          // endDate={item.startDateFormat}
          monthYear={item.selectedMonth}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))}
    </>
  );
};

export default MonthlyList;
