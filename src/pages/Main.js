import React, { useEffect } from "react";
import MemoSection from "../components/MemoSection";
import BriefSection from "../components/BriefSection";
import DailySection from "../components/DailySection";
import {
  MainFlex,
  MainRight,
  MainWrap,
  MainLeft,
  BriefData,
  Memo,
  Profile,
} from "../style/MainCSS";
import ProfileSection from "../components/ProfileSection";
import { getTodo } from "../api/api";
import BriefSection2 from "../components/BriefSection2";

const Main = ({
  todoData,
  setTodoData,
  nickName,
  setNickname,
}) => {

  return (
    <MainWrap>
      <MainFlex>
        <MainLeft>
          {/*  컴포넌트 */}
          <DailySection
            todoData={todoData}
            setTodoData={setTodoData}
          />
        </MainLeft>
        <MainRight>
          <Profile>
            <ProfileSection nickName={nickName} setNickname={setNickname} />
          </Profile>
          <Memo>
            {/* 컴포넌트 */}
            <MemoSection />
          </Memo>
          <BriefData>
            {/* 컴포넌트 */}
            <BriefSection2 />
          </BriefData>
        </MainRight>
      </MainFlex>
    </MainWrap>
  );
};

export default Main;
