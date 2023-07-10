import styled from "@emotion/styled";

export const MainWrap = styled.div`
  height: 100%;
  width: 100%;
  height: 850px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainFlex = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
  margin: 20px 0px;
`;
export const MainLeft = styled.div`
  height: 780px;
  max-height: 780px;
  width: 50%;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 20px;
`;

export const Profile = styled.div`
  padding: 20px;
  background: #e2e8f0;
  height: 140px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const Memo = styled.div`
  padding: 20px;
  background: #e2e8f0;
  height: 140px;
  margin-bottom: 15px;
  border-radius: 10px;
`;
export const BriefData = styled.div`
  height: 470px;
  padding: 30px 20px;
  background: #f1f5f9;
  border-radius: 10px;
`;

export const MainRight = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 10px;
  max-height: 800px;
`;

// 반응형
export const ResponWrap = styled.div`
  height: 100%;
  width: 100%;
  /* min-width: 600px; */
  margin: 0 auto;
  padding: 0 20px;
`;
export const ResponMainFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding-top: 10px;
  margin: 20px 0px;
`;
export const ResponProfile = styled.div`
  width: 700px;
  padding: 20px;
  background: #e2e8f0;
  height: 140px;
  /* margin-bottom: 15px; */
  border-radius: 10px;
  margin: 0 auto;
`;
export const ResponMemo = styled.div`
  width: 700px;
  padding: 20px;
  background: #e2e8f0;
  height: 140px;
  /* margin-bottom: 15px; */
  border-radius: 10px;
  margin: 0 auto;

`;
export const ResponDaily = styled.div`
  height: 600px;
  max-height: 600px;
  width: 700px;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
`;
export const ResponBrief = styled.div`
  width: 700px;
  height: 350px;
  padding: 30px 20px;
  background: #f1f5f9;
  border-radius: 10px;
  margin: 0 auto;
`;
