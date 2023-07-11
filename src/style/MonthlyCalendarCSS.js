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
  max-height: 800px;
  width: 100%;
  max-width: 1200px;
  min-width: 700px;

  /* padding-top: 10px; */
  margin: 30px;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 10px;
  padding-top: 20px;
  @media screen and (max-width: 1200px) {
    width: 700px;
    max-width: 700px;
  }
`;

export const MonthlyCalSpan = styled.span`
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
`;
export const CalendarSquareDiv = styled.div`
  height: "95px";
  max-height: "95px";
  overflow-y: "auto";
`;
