import { useEffect, useState } from "react";
import { getBriefData } from "../api/api";
import { DatePicker, Form, Space } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import dayjs from "dayjs";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const BriefSection = () => {
  // state
  // const [textData, setTextData] = useState([]);
  const [startMonth, setStartMonth] = useState("2023-06");
  const [endMonth, setEndMonth] = useState("2023-07");

  const [selectedRange, setSelectedRange] = useState([]);

  // form 초기화용
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM";

  const [maxStats, setMaxStats] = useState(null);
  const [totalStats, setTotalStats] = useState(null);

  // 메인 출력 데이터호출
  const summaryStats = async (startMonth, endMonth) => {
    try {
      const response = await getBriefData(startMonth, endMonth);
      const {
        maxSaveMoney: { monthYear: maxSaveMoneyMonthYear, maxSaveMoney },
        maxSaveTime: { monthYear: maxSaveTimeMonthYear, maxSaveTime },
        sumSaveMoney,
        sumSaveTime,
      } = response;
      console.log("response", response);
      // 가장 많이 절약한 달의 금액과 시간을 가져오는 요청
      setMaxStats({
        maxSaveMoneyMonthYear,
        maxSaveMoney,
        maxSaveTimeMonthYear,
        maxSaveTime,
        sumSaveMoney,
        sumSaveTime,
      });

      // 지정된 기간 동안의 총 절약 금액과 시간을 가져오는 요청
      setTotalStats({ startMonth, endMonth, sumSaveMoney, sumSaveTime });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    summaryStats(startMonth, endMonth); // 메인 데이터 호출
  }, [startMonth, endMonth]);

  //이벤트 핸들러
  const handleRangeChange = dates => {

    setSelectedRange(dates);
    console.log("dates", dates);
    setStartMonth(moment(dates[0].$d).format("YYYY-MM"));
    setEndMonth(moment(dates[1].$d).format("YYYY-MM"));
  };

  useEffect(() => {
    getBriefData(startMonth, endMonth);
  }, [startMonth, endMonth]);

  return (
    <div>
      <div className="text-lg font-semibold mb-4">
        {" "}
        <FontAwesomeIcon
          icon={faHandPointUp}
          className="text-2xl text-slate-700"
        />{" "}
        기간별 기록을 알려드려요!{" "}
      </div>
      <div>
        <div className="w-full h-full m-4 p-2">
          {/* <p>{startMonth}~{endMonth}까지 통계를 알려드려요</p> */}
          <div className="mb-4 mr-2">
            <RangePicker
              form={form}
              name="dateRange"
              picker="month"
              size="middle"
              allowClear={false}
              bordered={true}
              locale={moment.locale("ko")}
              defaultValue={[
                moment("2023/07", dateFormat),
                moment("2023/07", dateFormat),
              ]}
              format={dateFormat}
              value={selectedRange}
              onChange={handleRangeChange}
            />
            <span className="ml-2">기간동안</span>
            <p className="w-2/3 text-right text-xs">(기간 미선택 시 당월기록)</p>

          </div>
          {totalStats && (
            <div className="ml-2 mt-4">
              <p>
                총 절약하신 금액은
                <span className="font-semibold">
                  {" "}
                  {totalStats.sumSaveMoney || "0"}원
                </span>
                입니다{" "}
              </p>
              <p>
                총 절약하신 시간은
                <span className="font-semibold">
                  {" "}
                  {totalStats.sumSaveTime || "0"}시간
                </span>
                입니다{" "}
              </p>
            </div>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold my-4">
            {" "}
            <FontAwesomeIcon icon={faThumbsUp} /> 최고기록!{" "}
          </p>
          {maxStats && (
            <div className="ml-8 mb-4">
              <p>
                <span className="font-semibold">
                  {" "}
                  {maxStats.maxSaveMoneyMonthYear || "0"}월
                </span>
                에
                <span className="font-semibold">
                  {" "}
                  {maxStats.maxSaveMoney || "0"}원
                </span>
                을 아끼셨어요!
              </p>
              <p>
                <span className="font-semibold">
                  {maxStats.maxSaveTimeMonthYear || "0"}월
                </span>
                에
                <span className="font-semibold">
                  {" "}
                  {maxStats.maxSaveTime || "0"}시간
                </span>
                을 아끼셨어요!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BriefSection;
