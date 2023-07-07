import { useEffect, useState } from "react";
import { getMostSavedMonth } from "../api/api";

const BriefSection = () => {
  const [maxStats, setMaxStats] = useState(null);
  const [totalStats, setTotalStats] = useState(null);

  // 메인 출력 데이터호출
  const fetchMaxStats = async (_startMonth, _endMonth) => {
    try {
      const response = await getMostSavedMonth(_startMonth, _endMonth);
      // console.log(response.saveStats);
      const {
        maxMoneyMonth,
        maxSaveMoney,
        maxTimeMonth,
        maxSaveTime,
        sumSaveMoney,
        sumSaveTime,
      } = response.saveStats;

      // 가장 많이 절약한 달의 금액과 시간을 가져오는 요청
      setMaxStats({
        maxMoneyMonth,
        maxSaveMoney,
        maxTimeMonth,
        maxSaveTime,
        sumSaveMoney,
        sumSaveTime,
      });

      // 지정된 기간 동안의 총 절약 금액과 시간을 가져오는 요청
      setTotalStats({ _startMonth, _endMonth, sumSaveMoney, sumSaveTime });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 예시 사용
    const startDate = "2023-06"; // 시작 날짜
    const endDate = "2023-07"; // 종료 날짜
    fetchMaxStats(startDate, endDate); // 메인 데이터 호출
  }, []);

  return (
    <div className="h-auto bg-slate-50 rounded-md p-10 mt-14">
      {maxStats && (
        <div className="text-center ">
          <h2 className="text-xl">가장 많이 절약한 달</h2>
          <p>
            금액: {maxStats.maxSaveMoney}, 달: {maxStats.maxMoneyMonth}
          </p>
          <p>
            시간: {maxStats.maxSaveTime}, 달: {maxStats.maxTimeMonth}
          </p>
        </div>
      )}
      {totalStats && (
        <div className="text-center mt-10">
          <h2 className="text-xl">지정된 기간 동안<br/> 총 절약한 금액과 시간</h2>
          <p>
            기간: {totalStats._startMonth} ~ {totalStats._endMonth}
          </p>
          <p>금액: {totalStats.sumSaveMoney}</p>
          <p>시간: {totalStats.sumSaveTime}</p>
        </div>
      )}
    </div>
  );
};
export default BriefSection;