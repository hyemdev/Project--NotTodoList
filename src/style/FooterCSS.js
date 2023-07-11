import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  margin: 0 auto;
  background: #334155;
`;

export const FooterContent = styled.div`
  position: relative;
`;

export const FooterAbout = styled.div`
  padding-top: 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #fbbf24;
  cursor: pointer;

`;
export const FooterHoverDiv = styled.div`
  /* display: none; */
  position: absolute;
  left: calc(50% - 125px);
  bottom: 50px;
  height: 350px;
`;

export const FooterHover = styled.div`
  position: absolute;
  /* left: calc( 50% - 200px ); */
  bottom: 15px;
  width: 250px;
  height: 280px;
  background: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;
  border-radius: 10px;
  padding: 20px;
  & > h2 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
`;
export const ProfileBack = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  & > p {
    padding-left: 10px;
    line-height: 2;
  }
`;
export const ProfileFront = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  & > p {
    padding-left: 10px;
    line-height: 2;
  }
`;

export const FooterText = styled.h2`
  padding-top: 5px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #f1f5f9;
  letter-spacing: 2px;
`;
