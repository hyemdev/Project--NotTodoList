import React from "react";
import MonthlyList from "../components/MonthlyList";
import MonthlyForm from "../components/MonthlyForm";
import {
  AddTable,
  AddTableTr,
  AddTableThead,
  AddTitle,
  MonthlyAddWrap,
  AddTableThDate,
  AddTableThTitle,
  AddTableThNumber,
  AddTableThBtn,
  AddTitleDiv,
  Temp,
  ListTemp,
} from "../style/MonthlyAddCSS";

const MonthlyAdd = ({ todoData, setTodoData }) => {
  return (
    <MonthlyAddWrap>
      <AddTitleDiv>
        <AddTitle>한달목표 설정하기</AddTitle>
      </AddTitleDiv>
      <AddTable>
        <AddTableTr>
          <AddTableThDate>기간</AddTableThDate>
          <AddTableThTitle>Not Todo</AddTableThTitle>
          <AddTableThNumber>이달의 Dead-Line</AddTableThNumber>
          <AddTableThBtn></AddTableThBtn>
          <AddTableThBtn></AddTableThBtn>
        </AddTableTr>
        <ListTemp>
          <MonthlyList todoData={todoData} setTodoData={setTodoData} />
        </ListTemp>
      </AddTable>
      <Temp>
        <MonthlyForm todoData={todoData} setTodoData={setTodoData} />
      </Temp>
    </MonthlyAddWrap>
  );
};

export default MonthlyAdd;
