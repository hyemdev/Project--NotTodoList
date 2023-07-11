import styled from "@emotion/styled";

export const SummaryWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
export const SummaryDiv = styled.div`
  height: 100%;
  max-height: 820px;
  width: 100%;
  max-width: 1200px;
  /* padding-top: 10px; */
  margin: 20px;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 10px;

  @media screen and (max-width: 1200px) {
    width: 700px;
    max-height: 100%;
    max-width: 700px;
    padding-bottom: 100px;
  }
`;
export const SummarySubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 30px;
`;

export const WeekDiv = styled.div`
  width: 550px;
  height: 400px;
  margin-left: 10px;
`;
export const MonthDiv = styled.div`
  width: 580px;
  height: 350px;
  /* padding: 0 10px ; */
  margin-top: 20px;
`;
