import { useEffect, useState } from "react";
import CalendarDayListItem from "../components/CalenderDayListItem";

import {
  Aaa,
  CalendarTableThBtn,
  CalendarTableThNumber,
  CalendarTableThTitle,
  DailyCalTable,
  DailyCalTableThead,
  DailyCalTableTr,
  DailyCalTitle,
  DailyCalWrap,
  DailyTitleDiv
} from "../style/CalendarListCSS";
import { getCalendarDaylist } from "../api/api";

const CalendarDayList = ({ todoData, setTodoData, clickItems, clickDate }) => {
  // state
  const [DailyList, setDailyList] = useState([]);

  useEffect(() => {
    getCalendarDaylist(setDailyList, clickDate);
  }, []);
  console.log("DailyList", DailyList);
  return (
    <>
      <DailyCalWrap>
        <DailyTitleDiv>
          <DailyCalTitle>상세보기</DailyCalTitle>
        </DailyTitleDiv>
        <DailyCalTable>
          <DailyCalTableThead>
            <DailyCalTableTr>
              <CalendarTableThTitle>월간목표</CalendarTableThTitle>
              <CalendarTableThNumber>단위</CalendarTableThNumber>
              <CalendarTableThNumber>일일수량</CalendarTableThNumber>
              <CalendarTableThBtn></CalendarTableThBtn>
              <CalendarTableThBtn></CalendarTableThBtn>
            </DailyCalTableTr>
          </DailyCalTableThead>

        {DailyList.map(item => (
          <CalendarDayListItem
          key={item.useListId}
          item={item}
          name={item.name}
          costCategory={item.costCategory}
          cost={item.cost}
          // monthYear={item.selectedMonth}
          DailyList={DailyList}
          setDailyList={setDailyList}
          />
          ))}

          </DailyCalTable>
      </DailyCalWrap>
    </>
  );
};
export default CalendarDayList;
