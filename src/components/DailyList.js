import moment from "moment";
import React, { useEffect, useState } from "react";
import { getTodaylist } from "../api/api";
import DailyListItem from "./DailyListItem";
import { DailyListDiv,DailyListWrap } from "../style/DailySectionCSS";

const DailyList = ({ todoData, setTodoData}) => {
  // get관련 useState
  const [todayList, setTodayList] = useState([]);

  // 오늘날짜 계산하기
  const todayDate = moment().format("YYYY-MM-DD");

  // GET 위치
  useEffect(() => {
    getTodaylist(setTodayList, todayDate);
  }, [setTodayList,todayDate]);

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
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))}
    </>
  );
};
export default DailyList;
