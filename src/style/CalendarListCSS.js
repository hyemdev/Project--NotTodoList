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

export const DailyCalTable = styled.div`
  width: 100%;
  color: #1e293b;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const DailyCalTableTr = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  width: auto;
  max-width: 700px;
  font-size: 14px;
  color: #475569;
  background: #e2e8f0;
  padding: 0 3px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const CalendarTableThTitle = styled.div`
  padding: 12px 3px;
  width: 250px;
  text-align: center;
`;
export const CalendarTableThNumber = styled.div`
  padding: 12px 3px;
  width: 180px;
  text-align: center;
`;
export const CalendarTableThBtn = styled.div`
  padding: 12px 3px;
  width: 10%;
`;

// 상세보기 List body

export const CalListTbody = styled.div`
  font-size: 14px;
  color: #475569;
  padding: 0 3px;
  width: 688px;
  height: 350px;
  overflow-y: auto;
`;

export const CalListTr = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #e2e8f0;
`;

export const CalListTdTitle = styled.div`
  padding: 12px 3px;
  width: 250px;
  text-align: center;
`;
export const CalListTdNumber = styled.div`
  padding: 12px 3px;
  width: 130px;
  text-align: right;
`;

export const CalListTdUnit = styled.div`
  padding: 12px 3px;
  width: 50px;
  text-align: center;
  margin-right: 25px;
`;
export const CalListTdBtnDiv = styled.div`
  width: 200px;
`;

export const CalListButton = styled.button`
  padding: 4px 3px;
  width: 60px;
  height: 35px;
  margin: 4px;
  margin-right: 10px;
`;

//수정중 상태

export const CalListEditTdNumber = styled.div`
  padding: 2px 0px;
  width: 130px;
  text-align: center;
`;
export const CalListEditTdNumberInput = styled.input`
  padding: 6px 4px;
  width: 100px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  -webkit-appearance: none; /* Safari 및 Chrome 기반 브라우저 */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 다른 브라우저 */
`;
