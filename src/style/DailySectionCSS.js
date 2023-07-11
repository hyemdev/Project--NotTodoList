import styled from "@emotion/styled";

//DailySection
export const DailyScroll = styled.div``;

export const DailySectionTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;
export const DailyDate = styled.div`
  text-align: right;
`;

export const DailyTable = styled.div`
  width: 100%;
  /* height: 50%; */
  /* text-align: center; */
  color: #1e293b;
  margin: 15px 0;
  overflow-y: auto;
`;

export const DailyTableThead = styled.div`
  font-size: 12px;
  color: #475569;
  background: #e2e8f0;
  padding: 5px 10px;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  /* > div {
    flex-basis: 25%;
  } */
`;
export const DailyTableThTitle = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 10.5rem;
  text-align: center;
`;
export const DailyTableThNumber = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 4.5rem;
  text-align: center;
`;

export const DailyTableThBtn = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 7rem;
`;

// DailyList 평상 시

export const DailyListWrap = styled.div`
  width: 100%;
  background: #f8fafc;
  height: 500px;
  max-height: 500px;
  overflow-y: auto;
  border-radius: 10px;
  /* 1200px 이하 화면에서 적용되는 스타일 */
  @media screen and (max-width: 1200px) {
    height: 340px;
  }
`;

export const DailyListTr = styled.div`
  width: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
  border-radius: 10px;
  margin: 2px 0;
  border-bottom: 1px dotted #e2e2e2;
  /* > div {
    flex-basis: 25%;
  } */
  @media screen and (max-width: 1200px) {
    width: 600px;
  }
`;
export const DailyListTitle = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 180px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    width: 240px;
    margin: 0 10px;
  }
`;
export const DailyListNumber = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 6.5rem;
  text-align: right;
  margin-right: 8px;
  @media screen and (max-width: 1200px) {
    width: 180px;
  }
`;
export const DailyListTdUnit = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 4rem;
  text-align: left;
`;

export const DailyListBtn = styled.div`
  font-size: 12px;
  width: 60px;
  margin: 0 auto;
  /* margin-right: 30px; */
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 80px;
    margin-left: 40px;
  }
`;

//todolist 수정중
export const DailyEditListTr = styled.div`
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
export const DailyEditListTitle = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 12px 3px;
  width: 180px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    width: 200px;
  }
`;
export const DailyEditSub = styled.span`
  font-size: 12px;
  width: 100px;
`;

export const DailyEditListNumber = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 0px 3px;
  width: 80px;
  text-align: right;
`;

export const DailyEditNumberInput = styled.input`
  font-size: 12px;
  width: 60px;
  text-align: center;
  border: 1px solid #a1a1aa;
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
export const DailyEditListTdUnit = styled.div`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 12px 3px;
  width: 10px;
  text-align: left;
`;

export const DailyEditListBtn = styled.div`
  font-size: 12px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  gap: 0 5px;
  margin-right: 15px;
`;
