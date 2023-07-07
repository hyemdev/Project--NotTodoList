import { useEffect, useState } from "react";
import { getMostSavedMonth } from "../api/api";

const BriefSection = () => {
  const [maxStats, setMaxStats] = useState(null);
  const [totalStats, setTotalStats] = useState(null);

  // 메인 출력 데이터 호출
  const fetchMaxStats = async (_startMonth, _endMonth) => {
    try {
      const response = await getMostSavedMonth( _startMonth, _endMonth);
      const {
        maxMoneyMonth,
        maxSaveMoney,
        maxTimeMonth,
        maxSaveTime,
        sumSaveMoney,
        sumSaveTime,
      } = response;

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
    const startMonth = "2023-06"; // 시작 날짜
    const endMonth = "2023-07"; // 종료 날짜
    fetchMaxStats(startMonth, endMonth); // 메인 데이터 호출
  }, []);

  return (
    <div className="h-auto bg-slate-50 rounded-md p-10 mt-14 mb-14">
    {maxStats && (
        <div className="text-center ">
          <p>
            {maxStats.maxMoneyMonth}에  {maxStats.maxSaveMoney}원으로 <br />
            가장 많이 절약했습니다.
          </p>
          <p className="mt-10">
            {maxStats.maxMoneyMonth}에  {maxStats.maxSaveTime}시간으로 <br />
            가장 많이 절약했습니다.
          </p>
        </div>
      )}
    {totalStats && (
        <div className="text-center mt-10">
          <p>
            {totalStats._startMonth}부터 ~ {totalStats._endMonth}까지
          </p>
          <p>총 절약한 금액/시간</p>
          <p>금액: {totalStats.sumSaveMoney}</p>
          <p>시간: {totalStats.sumSaveTime}</p>
        </div>
      )}
    </div>
  );
};

export default BriefSection;