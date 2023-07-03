import CalendarDayListItem from "../components/CalenderDayListItem"

import { CalendarTableThBtn, CalendarTableThDate, CalendarTableThNumber, CalendarTableThTitle, DailyCalTable, DailyCalTableThead, DailyCalTableTr, DailyCalTitle, DailyCalWrap, DailyTitleDiv } from "../style/CalendarListCSS";


const CalendarDayList = ({ todoData, setTodoData }) => {
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
              <CalendarTableThNumber>수량</CalendarTableThNumber>
              <CalendarTableThBtn></CalendarTableThBtn>
              <CalendarTableThBtn></CalendarTableThBtn>
            </DailyCalTableTr>
          </DailyCalTableThead>
        </DailyCalTable>
        <CalendarDayListItem todoData={todoData} setTodoData={setTodoData} />
      </DailyCalWrap>
    </>
  );
};
export default CalendarDayList;
