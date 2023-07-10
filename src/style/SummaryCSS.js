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
  margin: 30px;
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
margin-top: 20px;
gap: 20px;
`


