import styled from "@emotion/styled";

export const DailyCalWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  /* max-width: 950px; */
  /* min-width: 760px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

// export const AddModalClose = styled.div`
// display: flex;
// justify-content: center;
// `

export const DailyTitleDiv = styled.div``;
export const DailyCalTitle = styled.h2`
  text-align: center;
  color: #475569;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  margin: 10px 0;
`;

//일자별 상세보기 table head

export const DailyCalTable = styled.table`
  width: 100%;
  /* width: 800px; */
  /* height: 400px; */
  /* text-align: center; */
  color: #1e293b;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const DailyCalTableThead = styled.thead`
  width: auto;
  max-width: 700px;
  font-size: 14px;
  color: #475569;
  background: #e2e8f0;
  padding: 0 3px;
`;

export const DailyCalTableTr = styled.tr`
  /* width: 100%; */
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const CalendarTableThTitle = styled.th`
  padding: 12px 3px;
  width: 35%;
  text-align: center;
`;
export const CalendarTableThNumber = styled.th`
  padding: 12px 3px;
  width: 10%;
  text-align: center;
`;
export const CalendarTableThBtn = styled.th`
  padding: 12px 3px;
  width: 10%;
`;

// 상세보기 List body

export const CalListTbody = styled.tbody`
  font-size: 14px;
  color: #475569;
  padding: 0 3px;
  width: 700px;
  height: 350px;
  overflow-y: auto;
`;

export const CalListTr = styled.tr`
  /* width: 900px; */
  max-width: 900px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const CalListTdTitle = styled.td`
  padding: 12px 3px;
  width: 35%;
  text-align: center;
`;
export const CalListTdUnit = styled.td`
  padding: 12px 3px;
  width: 15%;
  text-align: left;
`;
export const CalListTdNumber = styled.td`
  padding: 12px 3px;
  width: 15%;
  text-align: right;
`;
export const CalListTdBtnDiv = styled.td`
  padding: 12px 3px;
  width: 200px;
`;

export const CalListButton = styled.button`
  padding: 5px 3px;
  width: 70px;
  height: 35px;
  margin: 4px;
  margin-right: 10px;
`;

//수정중 상태

export const CalListEditTdNumber = styled.td`
  padding: 12px 10px;
  width: 15%;
  text-align: center;
  border: 1px dotted #e2e2e2;
`;
