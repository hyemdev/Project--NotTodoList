import styled from "@emotion/styled";

export const MainWrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
`;

// export const MainGrid = styled.div`
// display: grid;
// grid-template-rows: 1fr 1fr 1fr;
// grid-template-columns: 1fr 1fr;
// grid-row: 2/3;
// grid-column: 1/3;
// `;

export const MainFlex = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
  margin: 0 10px;
`;
export const MainLeft = styled.div`
  height: 100%;
  width: 50%;
`;

export const Memo = styled.div`
  padding: 20px;
  background: #e2e8f0;
  height: 130px;
  margin-bottom: 15px;
  border-radius: 10px;
`;
export const BriefData = styled.div`
  height: 800px;
  padding: 30px 20px;
  background: #f1f5f9;
  border-radius: 10px;
`;

export const MainRight = styled.div`
  padding: 20px;
  width: 50%;
  background: #f1f5f9;
  border-radius: 10px;
`;
