import CalendarDayListItem from "../components/CalenderDayListItem";

import {
  CalendarTableThBtn,
  CalendarTableThDate,
  CalendarTableThNumber,
  CalendarTableThTitle,
  DailyCalTable,
  DailyCalTableThead,
  DailyCalTableTr,
  DailyCalTitle,
  DailyCalWrap,
  DailyTitleDiv,
} from "../style/CalendarListCSS";

const CalendarDayList = ({ todoData, setTodoData, clickItems, clickDate }) => {
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
        </DailyCalTable>
        {clickItems.map(item => (
          <CalendarDayListItem
            key={item.id}
            item={item}
            title={item.title}
            options={item.options}
            goalNumber={item.goalNumber}
            monthYear={item.selectedMonth}
            todoData={todoData}
            setTodoData={setTodoData}
          />
        ))}
      </DailyCalWrap>
    </>
  );
};
export default CalendarDayList;
