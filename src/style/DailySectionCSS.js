import styled from "@emotion/styled";

//DailySection
export const DailySectionTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

export const DailyTable = styled.table`
  width: 100%;
  /* text-align: center; */
  color: #1e293b;
  margin-bottom: 10px;
`;
export const DailyTableThead = styled.thead`
  font-size: 12px;
  color: #475569;
  background: #e2e8f0;
  padding: 0 10px;

  border-radius: 10px;
`;
export const DailyTableTr = styled.tr`
  /* width: 100%; */
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;
export const DailyTableThTitle = styled.th`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 30%;
  text-align: center;
`;
export const DailyTableThNumber = styled.th`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 10%;
  text-align: center;
`;
export const DailyTableThBtn = styled.th`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 16%;
`;

//DailyList
export const DailyListDiv = styled.div`
  width: 100%;
  height: 500px;
`;

// DailyList 평상 시

export const DailyListWrap = styled.tbody`
  width: 100%;
  /* text-align: center; */
  background: #f8fafc;
  margin-top: 10px;
`;

export const DailyListTr = styled.tr`
  width: 550px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px;
  border-radius: 10px;

`;
export const DailyListTitle = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 30%;
  text-align: center;
`;
export const DailyListNumber = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 10%;
  text-align: center;
`;
export const DailyListBtn = styled.td`
  font-size: 12px;
  width: 10%;
  margin-right: 30px;
`;

//todolist 수정중
export const DailyEditListTr = styled.tr`
  width: 520px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px;
  border-radius: 10px;
`;
export const DailyEditListTitle = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 30%;
  text-align: center;
`;
export const DailyEditListNumber = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 10%;
  text-align: center;
`;
export const DailyEditListBtn = styled.td`
  font-size: 12px;
  width: 20%;
  display: flex;
  justify-content: space-between;
`;
