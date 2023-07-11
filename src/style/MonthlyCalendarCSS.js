import styled from "@emotion/styled";

export const MonthlyCalendarWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const MonthlyCalendarDiv = styled.div`
  height: 100%;
  max-height: 810px;
  width: 100%;
  max-width: 1200px;
  min-width: 700px;
  margin: 20px;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 20px 20px 5px 20px;
  @media screen and (max-width: 1200px) {
    width: 700px;
    max-width: 700px;
  }
`;

export const MonthlyCalSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
// export const CalendarSquareDiv = styled.div`
//   height: 85px;
//   max-height: 85px;
//   overflow-y: auto;
// `;
