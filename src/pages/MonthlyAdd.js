import React from "react";
import MonthlyList from "../components/MonthlyList";
import MonthlyForm from "../components/MonthlyForm";
import {
  AddTable,
  AddTableTh,
  AddTableTr,
  AddTableThead,
  AddTitle,
  MonthlyAddWrap,
} from "../style/MonthlyAddCSS";

const MonthlyAdd = ({ todoData, setTodoData }) => {
  return (
    <div>
      <MonthlyAddWrap>
        <div>
          <AddTitle>한달목표 설정하기</AddTitle>
        </div>
        <AddTable>
          <AddTableThead>
            <AddTableTr>
              <AddTableTh className="w-2/12">기간</AddTableTh>
              <AddTableTh className="w-3/12">월간목표</AddTableTh>
              <AddTableTh className="w-1/12">단위</AddTableTh>
              <AddTableTh className="w-1/12">수량</AddTableTh>
              <AddTableTh className="w-1/12"></AddTableTh>
              <AddTableTh className="w-1/12"></AddTableTh>
            </AddTableTr>
          </AddTableThead>
        </AddTable>
        <MonthlyList todoData={todoData} setTodoData={setTodoData} />
        <MonthlyForm todoData={todoData} setTodoData={setTodoData} />
      </MonthlyAddWrap>
    </div>
  );
};

export default MonthlyAdd;
