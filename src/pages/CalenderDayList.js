import { useEffect, useState } from "react";
import CalendarDayListItem from "../components/CalenderDayListItem";

import {
  CalListTbody,
  CalendarTableThBtn,
  CalendarTableThNumber,
  CalendarTableThTitle,
  DailyCalTable,
  DailyCalTableTr,
  DailyCalTitle,
  DailyCalWrap,
  DailyTitleDiv,
} from "../style/CalendarListCSS";
import { getCalendarDaylist } from "../api/api";

const CalendarDayList = ({ todoData, setTodoData, clickItems, clickDate}) => {
  // state
  const [DailyList, setDailyList] = useState([]);

  useEffect(() => {
    getCalendarDaylist(setDailyList, clickDate);
  }, []);
  return (
    <>
      <DailyCalWrap>
        <DailyTitleDiv>
          <DailyCalTitle>상세보기</DailyCalTitle>
        </DailyTitleDiv>
        <DailyCalTable>
            <DailyCalTableTr>
              <CalendarTableThTitle>Not Todo</CalendarTableThTitle>
              {/* <CalendarTableThNumber>단위</CalendarTableThNumber> */}
              <CalendarTableThNumber>Pay</CalendarTableThNumber>
              <CalendarTableThBtn></CalendarTableThBtn>
              <CalendarTableThBtn></CalendarTableThBtn>
            </DailyCalTableTr>
          <CalListTbody>
            {DailyList.map(item => (
              <CalendarDayListItem
                key={item.useListId}
                item={item}
                name={item.name}                
                costCategory={item.costCategory}
                useCost={item.useCost}
                // monthYear={item.selectedMonth}
                DailyList={DailyList}
                setDailyList={setDailyList}   
              />
            ))}
          </CalListTbody>
        </DailyCalTable>
      </DailyCalWrap>
    </>
  );
};
export default CalendarDayList;
