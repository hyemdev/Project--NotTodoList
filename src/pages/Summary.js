import React, { useEffect, useState } from "react";
import WeeklySummary from "../components/WeeklySummary";
import MonthlySummary from "../components/MonthlySummary";
import WeeklySummary2 from "../components/WeeklySummary2";
import MonthlySummary2 from "../components/MonthlySummary2";
import {
  SummaryDiv,
  SummarySubDiv,
  SummaryWrap,
  WeekDiv,
} from "../style/SummaryCSS";
import { getAnalysisData } from "../api/api";
import { useMediaQuery } from "react-responsive";

const Summary = () => {
  // state
  const [analystic, setAnalystic] = useState({});
  const [distrucData, setDistrucData] = useState({});

  // 반응형
  const isResponsive = useMediaQuery({ maxWidth: 1200 });

  // 메인 출력 데이터 호출
  const [data, setData] = useState(null); // 데이터 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    getAnalysisData(setAnalystic).then(result => {
      setData(result);
      setIsLoading(false); // 로딩 상태 변경
    });
  }, []);
  // 데이터 로딩 중인 경우 로딩 표시
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isResponsive ? (
        <SummaryWrap>
          <SummaryDiv>
            <SummarySubDiv>
              <WeekDiv>
                <WeeklySummary2
                  analystic={analystic}
                  setAnalystic={setAnalystic}
                />
              </WeekDiv>
              <WeekDiv>
                <WeeklySummary
                  analystic={analystic}
                  setAnalystic={setAnalystic}
                />
              </WeekDiv>
              <monthDiv>
                <MonthlySummary2
                  analystic={analystic}
                  setAnalystic={setAnalystic}
                />
              </monthDiv>
              <monthDiv>
                <MonthlySummary
                  analystic={analystic}
                  setAnalystic={setAnalystic}
                />
              </monthDiv>
            </SummarySubDiv>
          </SummaryDiv>
        </SummaryWrap>
      ) : (
        <SummaryWrap>
          <SummaryDiv>
            <div className="flex flex-wrap ml-4 mt-2">
              <WeekDiv>
                  <WeeklySummary2
                    analystic={analystic}
                    setAnalystic={setAnalystic}
                  />{" "}
              </WeekDiv>
              <WeekDiv>
                  <WeeklySummary
                    analystic={analystic}
                    setAnalystic={setAnalystic}
                  />
              </WeekDiv>
              <monthDiv>
                  <MonthlySummary2
                    analystic={analystic}
                    setAnalystic={setAnalystic}
                  />
              </monthDiv>
              <monthDiv>
                  <MonthlySummary
                    analystic={analystic}
                    setAnalystic={setAnalystic}
                  />
              </monthDiv>
            </div>
          </SummaryDiv>
        </SummaryWrap>
      )}
    </div>
  );
};

export default Summary;
