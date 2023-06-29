import React from "react";
import MonthlyListItem from "./MonthlyListItem";

const MonthlyList = ({ todoData, setTodoData }) => {
  console.log(todoData);
  return (
    <div>
      {/* not todo list 출력 */}
      {/* {todoData.map(item => (
        <MonthlyListItem
          key={item.id}
          item={item}
          options={item.options}
          startDate={item.startDate}
          endDate={item.endDate}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))} */}
    </div>
  );
};

export default MonthlyList;
