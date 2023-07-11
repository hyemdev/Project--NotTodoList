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
  ResponWrap,
  ResponMainFlex,
  ResponProfile,
  ResponMemo,
  ResponDaily,
  ResponBrief,
} from "../style/MainCSS";
import ProfileSection from "../components/ProfileSection";
import { useMediaQuery } from "react-responsive";

const Main = ({ todoData, setTodoData, nickName, setNickname }) => {
  // 반응형
  const isResponsive = useMediaQuery({ maxWidth: 1200 });

  return (
    <div>
      {isResponsive ? (
        <ResponWrap>
          <ResponMainFlex>
            {/* 컴포넌트 */}
            <ResponProfile>
              <ProfileSection nickName={nickName} setNickname={setNickname} />
            </ResponProfile>
            <ResponMemo>
              <MemoSection />
            </ResponMemo>
            <ResponDaily>
              <DailySection todoData={todoData} setTodoData={setTodoData} />
            </ResponDaily>
            <ResponBrief>
              <BriefSection />
            </ResponBrief>
          </ResponMainFlex>
        </ResponWrap>
      ) : (
        <MainWrap>
          <MainFlex>
            <MainLeft>
              {/*  컴포넌트 */}
              <DailySection todoData={todoData} setTodoData={setTodoData} />
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
                <BriefSection />
              </BriefData>
            </MainRight>
          </MainFlex>
        </MainWrap>
      )}
    </div>
  );
};

export default Main;
