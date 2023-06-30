import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  position: relative;
  height: 140px;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  background: #334155;
  padding: 20px;
`;

export const HeaderTitle = styled.h2`
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  color: #27272a;
  letter-spacing: 2px;
`;

export const HeaderNav = styled.ul`
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
gap: 0 50px
`
export const HeaderNavLi = styled.li`
color: #f1f5f9;
size: 15px;
`