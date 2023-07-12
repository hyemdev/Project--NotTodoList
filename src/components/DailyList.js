import moment from "moment";
import React, { useEffect, useState } from "react";
// import { getTodaylist } from "../api/api";
import DailyListItem from "./DailyListItem";

const DailyList = ({ todoData, setTodoData,todayList, setTodayList}) => {


  // 오늘날짜 계산하기
  const todayDate = moment().format("YYYY-MM-DD");

  // GET 위치
  useEffect(() => {
    console.log("화면 리랜더링")
  }, [setTodayList]);

  return (
    <>
      {todayList.map(item => (
        <DailyListItem
          key={item.goalId}
          item={item}
          notTodo={item.notTodo}
          goalCost={item.goalCost}
          useCostSum={item.useCostSum}
          monthYear={item.monthYear}
          // costCategory={item.costCategory}
          todayList={todayList}
          setTodayList={setTodayList}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))}
    </>
  );
};
export default DailyList;
