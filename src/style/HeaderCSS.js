import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  position: relative;
  height: 170px;
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  background: #334155;
  padding: 20px;
`;

export const HeaderTitle = styled.div`
  background: #f59e0b;
  width: 220px;
  margin: 0 auto;
  padding: 0px 10px;
  border-radius: 30px;
  & > h2 {
    font-size: 35px;
    font-weight: 900;
    letter-spacing: 2px;
    /* color: #cbd5e1; */
    color: #fff;
    text-align: center;
    & > b {
      font-size: 45px;
      font-weight: 900;
    }
  }
  margin-bottom: 5px;
`;

export const HeaderSubtitle = styled.h3`
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  /* color: #27272a; */
  color: #94a3b8;
  /* letter-spacing: -1px; */
  padding-bottom: 3px;
`;

export const HeaderNav = styled.ul`
  margin: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 100px;
`;
export const HeaderNavLi = styled.li`
  text-align: center;
  color: #f1f5f9;
  size: 15px;
  &:hover {
    color: #fde68a;
  }
`;
