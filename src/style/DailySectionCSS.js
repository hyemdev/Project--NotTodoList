import styled from "@emotion/styled";

//DailySection
export const DailyScroll = styled.div`
  /* height: 500px; */
  /* overflow-y: auto; */
`;

export const DailySectionTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

export const DailyTable = styled.table`
  width: 100%;
  /* height: 50%; */
  /* text-align: center; */
  color: #1e293b;
  margin: 10px 0;
  overflow-y: auto;
`;

export const DailyTableThead = styled.thead`
  font-size: 12px;
  color: #475569;
  background: #e2e8f0;
  padding: 5px 10px;
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
  width: 10.5rem;
  text-align: center;
`;
export const DailyTableThNumber = styled.th`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 5rem;
  text-align: center;
`;
export const DailyTableThUnit = styled.th`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 3rem;
  text-align: center;
`;
export const DailyTableThBtn = styled.th`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 6rem;
`;

//DailyList
// export const DailyListDiv = styled.tbody`
//   width: 100%;
// `;

// DailyList 평상 시

export const DailyListWrap = styled.tbody`
  width: 100%;
  /* text-align: center; */
  background: #f8fafc;
`;

export const DailyListTr = styled.tr`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
  border-radius: 10px;
  margin: 2px 0;
  border-bottom: 1px dotted #e2e2e2;
`;
export const DailyListTitle = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 11rem;
  text-align: center;
`;
export const DailyListNumber = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 6rem;
  text-align: right;
`;
export const DailyListTdUnit = styled.td`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 4rem;
  text-align: left;
`;

export const DailyListBtn = styled.td`
  font-size: 12px;
  width: 10%;
  margin: 0 auto;
  /* margin-right: 30px; */
  cursor: pointer;
`;

//todolist 수정중
export const DailyEditListTr = styled.tr`
  width: 100%;
  // margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
  border-radius: 10px;
  margin: 2px 0;
  border-bottom: 1px dotted #e2e2e2;
`;
export const DailyEditListTitle = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 10rem;
  text-align: center;
`;
export const DailyEditListNumber = styled.td`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 3px;
  width: 5rem;
  text-align: right;
`;
export const DailyEditNumberInput = styled.input`
  font-size: 12px;
  width: 60px;
  text-align: center;
  border: 1px solid #f4f4f4;
  padding: 2px;
  appearance: textfield;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const DailyEditListTdUnit = styled.td`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 3rem;
  text-align: left;
`;

export const DailyEditListBtn = styled.td`
  font-size: 12px;
  width: 5.5rem;
  display: flex;
  justify-content: space-between;
  gap: 0 4px;
`;
